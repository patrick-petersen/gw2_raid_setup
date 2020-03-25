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
            }
            else {
                //In case there is no history object
                let setup = "";
                if(hash.length >= 1) {
                    setup = hash;
                }
                this.updateListFromUrl(setup);
                this._currentUrl = hash;
            }

            this.callOnChangeCallbacks();
        };
    }

    saveList(list) {
        this._list = list;
        this._currentUrl = this.generateUrlFromList(list);
        console.log("updated url:", this._currentUrl);
    }

    generateUrlFromList(list) {
        let url = "";
        console.log(list);
        
        function concatWith(delimiter) {
            return (total, currentValue, currentIndex, arr)=> {
                return total += "" + (currentIndex === 0?"":delimiter) + currentValue;
            }
        }
        
        return list.map((wingValue, wingIndex) => {
            console.log(wingValue);
            return wingValue.bosses.map((bossValue, bossIndex) => {
                console.log(bossValue);
                const selectedSetup = bossValue.selectedSetup;
                const roles = bossValue.setups[selectedSetup].roles;
                return "" + selectedSetup + roles.map((roleValue, roleIndex) => {
                    console.log(roleValue);
                    return this._playerSettings.players.indexOf(roleValue.player);
                }).reduce(concatWith(""));
            }).reduce(concatWith(";"));
        }).reduce(concatWith(";"));
    }
    
    updateListFromUrl(url) {
        if(url.length <= 1) return;
        const encounters = url.split(";");
        let wingIndex = 0;
        let bossIndex = 0;
        encounters.forEach((value, index) => {
            console.log(wingIndex, bossIndex);
            const roles = value.substring(1);

            const selectedSetup = parseInt(value.charAt(0));

            const wing = this._list[wingIndex];
            const boss  = wing.bosses[bossIndex];
            const setup = boss.setups[selectedSetup];
            const rolesObject = setup.roles;

            boss.selectedSetup = selectedSetup;

            for(let i = 0; i < roles.length; i++) {
               const player = this._playerSettings.players[roles.charAt(i)];
               if(rolesObject.length > i) {
                   rolesObject[i].player = player;
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


    loadSetupFromString(source) {
        source.split(";").forEach((value, index) => {
           //Looping through bosses
           let bossNumber = index;
           if(value.length <= 0) {
               this._setups[bossNumber] = 0;
           }
           else {
               let setup = value.charAt(0);
               this._setups[bossNumber] = parseInt(setup);

               if(value.length > 1) {
                   this._players[index] = [];
                   for (let i = 1; i < value.length; i++) {
                       this._players[index][i-1] = parseInt(value.charAt(i));
                   }
               }
           }
        });
    }

    updateCurrentUrl() {
        const url = this.generateUrl();

        console.log("new url:", url);

        this._currentUrl = url;
        const historyObject = {
            _currentUrl: this._currentUrl,
            _setups: this._setups,
            _players: this._players,
        }

        window.history.pushState(historyObject, "[Koss] Raidplaner", "#"+url)
    }
}