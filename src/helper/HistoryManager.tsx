//abstract class a {}

import {PlayerSettings, Wing} from "../Setups/SetupConfigs/RaidSetup";

import {Player} from "../Setups/SetupConfigs/AllPlayers";

export type List = Wing<Player>[];
export type Settings = PlayerSettings<Player>;
export type historyObjectType = {
    _currentHash: string,
    _list: List,
};


abstract class HistoryManager {

    abstract getHash() : string;
    abstract saveHash(historyObject : historyObjectType, hash : string) : void;
    abstract changedHash(historyObject : historyObjectType, hash : string) : void;

    _startHash = this.getHash();
    _currentHash = this._startHash;
    _playerSettings : Settings;
    _list : List = [];

    _onChangeCallbacks : ((list : List) => void)[] = [];

    constructor(list: List, playerSettings : Settings) {
        this._playerSettings = playerSettings;
        let hash = this.getHash();

        this.saveList(list);

        if(hash.length < 1) {
            hash = "";
        }

        this.updateListFromHash(hash);
    }

    saveList(list : List) {
        this._list = list;
        this.listChanged();
    }

    generateHashFromList(list : List) {
        function concatWith(delimiter : string, finisher:(value: string) => any = (a)=>a) {
            return (total : number | string,
                    currentValue : number | string,
                    currentIndex : number | string/*,
                    array: number[] | string[]*/)=> {
                return finisher(total + "" + (currentIndex === 0?"":delimiter) + currentValue);
            }
        }
        
        return list.map((wingValue, wingIndex) => {
            console.debug("wingIndex", wingIndex)
            return wingValue.bosses.map((bossValue, bossIndex) => {
                const selectedSetup = bossValue.selectedSetup;
                const roles = bossValue.setups[selectedSetup].roles;
                console.debug("bossIndex", bossIndex);
                console.debug("selectedSetup", selectedSetup);

                const decoded = "" + (this.toBigInt(selectedSetup) + 1n) + roles.map((roleValue/*, roleIndex*/) => {
                    const player : Player = (roleValue.replacement)?roleValue.replacement:roleValue.player;
                    console.debug(player, this._playerSettings.players.indexOf(player));
                    return this._playerSettings.players.indexOf(player);
                }).reduce(concatWith("", a=>a));
                console.debug(list, decoded);

                return Base64.fromBigInt(this.stringToInt(decoded));
            }).reduce(concatWith(";"));
        }).reduce(concatWith(";"));
    }

    stringToInt(string : string) {
        // eslint-disable-next-line
        return BigInt(string);
    }

    toBigInt(int : number) {
        // eslint-disable-next-line
        return BigInt(int);
    }
    
    updateListFromHash(hash : string) {
        if(hash.length <= 1) return;
        const encounters = hash.split(";");
        let wingIndex = 0;
        let bossIndex = 0;
        encounters.forEach((value/*, index*/) => {
            const decodedValue = Base64.toBigInt(value).toString();
            const roles = decodedValue.substring(1);
            const selectedSetup = parseInt(decodedValue.charAt(0)) - 1;
            const wing = this._list[wingIndex];
            const boss  = wing.bosses[bossIndex];
            const setup = boss.setups[selectedSetup];
            const rolesObject = setup.roles;

            boss.selectedSetup = selectedSetup;

            for(let i = 0; i < roles.length; i++) {
               const player = this._playerSettings.players[parseInt(roles.charAt(i))];
               if(rolesObject.length > i) {
                   rolesObject[i].replacement = player;
               }
               else {
                   console.error("Could not save player!", wingIndex, bossIndex, i, player);
               }
            }

            bossIndex++;
            if(wing.bosses.length <= bossIndex) {
               wingIndex++;
               bossIndex = 0;
            }
        });
        this.callOnChangeCallbacks();
    }

    callOnChangeCallbacks() {
        this._onChangeCallbacks.forEach(value => value(this._list));
    }

    addOnChangeCallback(callback : (list : List) => void) {
        this._onChangeCallbacks.push(callback);
    }

    updateCurrentHash(hash : string) {
        this._currentHash = hash;
        const historyObject = {
            _currentHash: this._currentHash,
            _list: this._list,
        };

        this.saveHash(historyObject, hash);
    }

    listChanged() {
        const hash = this.generateHashFromList(this._list);
        this.updateCurrentHash(hash);
    }
}

//source: https://stackoverflow.com/a/27696695/2754830
// rewritten for typescript
const Base64 = (function () {
    const digitsStr =
        //   0       8       16      24      32      40      48      56     63
        //   v       v       v       v       v       v       v       v      v
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-";
    const digits = digitsStr.split('');
    const digitsMap : {[id: string] : number} = {};
    for (let i = 0; i < digits.length; i++) {
        digitsMap[digits[i]] = i;
    }
    //eslint-disable-next-line no-undef
    const digitsMap64 : {[id: string] : bigint}  = {};
    for (let i = 0n; i < digits.length; i++) {
        digitsMap64[digits[Number(i)]] = i;
    }
    return {
        fromInt: function(int32 : number) {
            let result = '';
            do {
                result = digits[int32 & 0x3f] + result;
                int32 >>>= 6;
            } while (int32 !== 0)
            return result;
        },
        toInt: function(digitsStr : string) {
            let result = 0;
            const digits = digitsStr.split('');
            for (let i = 0; i < digits.length; i++) {
                result = (result << 6) + digitsMap[digits[i]];
            }
            return result;
        },
        //eslint-disable-next-line no-undef
        fromBigInt: function(int64 : bigint) {
            let result = '';
            do {
                result = digits[Number(int64 & 0x3fn)] + result;
                int64 >>= 6n;
            } while (int64 !== 0n)
            return result;
        },
        toBigInt: function(digitsStr : string) {
            let result = 0n;
            const digits = digitsStr.split('');
            for (let i = 0; i < digits.length; i++) {
                result = (result << 6n) + digitsMap64[digits[i]];
            }
            return result;
        }
    };
})();

export default HistoryManager;