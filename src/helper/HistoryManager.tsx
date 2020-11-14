import {PlayerSettings, Wing} from "../Setups/SetupConfigs/RaidSetup";

import {Player} from "../Setups/SetupConfigs/AllPlayers";

type List = Wing<Player>[];
type Settings = PlayerSettings<Player>;

export default class HistoryManager {
    _startUrl = window.location.hash;
    _currentUrl = this._startUrl;
    _playerSettings : Settings;
    _list : List = [];

    _onChangeCallbacks : ((list : List) => void)[] = [];

    constructor(list: List, playerSettings : Settings) {
        this._playerSettings = playerSettings;
        const hash = window.location.hash.substr(1);

        this.saveList(list);

        let setup = "";
        if(hash.length >= 1) {
            setup = hash;
        }

        this.updateListFromUrl(setup);

        window.onpopstate = (event : PopStateEvent) => {
            console.log("location:", window.location.hash, "state:", event);
            const hash = window.location.hash.substr(1);
            const historyObject = event.state;
            if(historyObject !== null) {
                this._list = historyObject._list;
                this._currentUrl = historyObject._currentUrl;
                this.callOnChangeCallbacks();
            }
            else {
                //In case there is no history object
                //i.e. back to initial load, or manually editing the hash
                let setup = "";
                if(hash.length >= 1) {
                    setup = hash;
                }
                this.updateListFromUrl(setup);
                this._currentUrl = hash;
            }
        };
    }

    saveList(list : List) {
        this._list = list;
        this.listChanged();
    }

    generateUrlFromList(list : List) {
        function concatWith(delimiter : string, finisher:(value: string) => any = (a)=>a) {
            return (total : number | string,
                    currentValue : number | string,
                    currentIndex : number | string,
                    array: number[] | string[])=> {
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
                // @ts-ignore
                const decoded = "" + (this.toBigInt(selectedSetup) + 1n) + roles.map((roleValue, roleIndex) => {
                    const player : Player = (roleValue.replacement)?roleValue.replacement:roleValue.player;
                    console.debug(player, this._playerSettings.players.indexOf(player));
                    return this._playerSettings.players.indexOf(player);
                }).reduce(concatWith("", a=>a));
                console.debug(list, decoded);

                const encoded = Base64.fromBigInt(this.stringToInt(decoded));
                return encoded;
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
    
    updateListFromUrl(url : string) {
        if(url.length <= 1) return;
        const encounters = url.split(";");
        let wingIndex = 0;
        let bossIndex = 0;
        encounters.forEach((value, index) => {
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

    updateCurrentUrl(url : string) {
        this._currentUrl = url;
        const historyObject = {
            _currentUrl: this._currentUrl,
            _list: this._list,
        };

        window.history.pushState(historyObject, "[Koss] Raidplaner", "#"+url);
    }

    listChanged() {
        const url = this.generateUrlFromList(this._list);
        this.updateCurrentUrl(url);
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
    let digitsMap : {[id: string] : number} = {};
    for (let i = 0; i < digits.length; i++) {
        digitsMap[digits[i]] = i;
    }
    let digitsMap64 : {[id: string] : bigint}  = {};
    for (let i = 0n; i < digits.length; i++) {
        digitsMap64[digits[Number(i)]] = i;
    }
    return {
        fromInt: function(int32 : number) {
            let result = '';
            while (true) {
                result = digits[int32 & 0x3f] + result;
                int32 >>>= 6;
                if (int32 === 0)
                    break;
            }
            return result;
        },
        toInt: function(digitsStr : string) {
            var result = 0;
            var digits = digitsStr.split('');
            for (var i = 0; i < digits.length; i++) {
                result = (result << 6) + digitsMap[digits[i]];
            }
            return result;
        },
        fromBigInt: function(int64 : bigint) {
            var result = '';
            while (true) {
                result = digits[Number(int64 & 0x3fn)] + result;
                int64 >>= 6n;
                if (int64 === 0n)
                    break;
            }
            return result;
        },
        toBigInt: function(digitsStr : string) {
            var result = 0n;
            var digits = digitsStr.split('');
            for (var i = 0; i < digits.length; i++) {
                result = (result << 6n) + digitsMap64[digits[i]];
            }
            return result;
        }
    };
})();