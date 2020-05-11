export default class HistoryManager {
    _startUrl = window.location.hash;
    _currentUrl = this._startUrl;
    _playerSettings = {};
    _list = [];

    _onChangeCallbacks = [];

    constructor(list, playerSettings) {
        this._playerSettings = playerSettings;
        const hash = window.location.hash.substr(1);

        this.saveList(list);

        let setup = "";
        if(hash.length >= 1) {
            setup = hash;
        }

        this.updateListFromUrl(setup);

        window.onpopstate = (event) => {
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

    saveList(list) {
        this._list = list;
        this.listChanged();
    }

    generateUrlFromList(list) {
        function concatWith(delimiter) {
            return (total, currentValue, currentIndex)=> {
                return total + "" + (currentIndex === 0?"":delimiter) + currentValue;
            }
        }
        
        return list.map((wingValue, wingIndex) => {
            return wingValue.bosses.map((bossValue, bossIndex) => {
                const selectedSetup = bossValue.selectedSetup;
                const roles = bossValue.setups[selectedSetup].roles;
                const decoded = "" + (this.stringToInt(selectedSetup) + 1n) + roles.map((roleValue, roleIndex) => {
                    const player = (roleValue.hasOwnProperty("replacement")?roleValue.replacement:roleValue.player);
                    return this._playerSettings.players.indexOf(player);
                }).reduce(concatWith(""));
                const encoded = Base64.fromBigInt(this.stringToInt(decoded));
                return encoded;
            }).reduce(concatWith(";"));
        }).reduce(concatWith(";"));
    }

    stringToInt(string) {
        // eslint-disable-next-line
        return BigInt(string);
    }
    
    updateListFromUrl(url) {
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
               const player = this._playerSettings.players[roles.charAt(i)];
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

    addOnChangeCallback(callback) {
        this._onChangeCallbacks.push(callback);
    }

    updateCurrentUrl(url) {
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
const Base64 = (function () {
    var digitsStr =
        //   0       8       16      24      32      40      48      56     63
        //   v       v       v       v       v       v       v       v      v
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-";
    var digits = digitsStr.split('');
    var digitsMap = {};
    for (var i = 0; i < digits.length; i++) {
        digitsMap[digits[i]] = i;
    }
    var digitsMap64 = {};
    for (var i = 0n; i < digits.length; i++) {
        digitsMap64[digits[i]] = i;
    }
    return {
        fromInt: function(int32) {
            var result = '';
            while (true) {
                result = digits[int32 & 0x3f] + result;
                int32 >>>= 6;
                if (int32 === 0)
                    break;
            }
            return result;
        },
        toInt: function(digitsStr) {
            var result = 0;
            var digits = digitsStr.split('');
            for (var i = 0; i < digits.length; i++) {
                result = (result << 6) + digitsMap[digits[i]];
            }
            return result;
        },
        fromBigInt: function(int64) {
            var result = '';
            while (true) {
                result = digits[int64 & 0x3fn] + result;
                int64 >>= 6n;
                if (int64 === 0n)
                    break;
            }
            return result;
        },
        toBigInt: function(digitsStr) {
            var result = 0n;
            var digits = digitsStr.split('');
            for (var i = 0; i < digits.length; i++) {
                result = (result << 6n) + digitsMap64[digits[i]];
            }
            return result;
        }
    };
})();