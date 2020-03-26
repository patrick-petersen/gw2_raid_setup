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
        console.log(list);
        
        function concatWith(delimiter) {
            return (total, currentValue, currentIndex)=> {
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
                    const player = (roleValue.hasOwnProperty("replacement")?roleValue.replacement:roleValue.player);
                    return this._playerSettings.players.indexOf(player);
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
        console.log("list:", this._list);
        this._onChangeCallbacks.forEach(value => value(this._list));
    }

    addOnChangeCallback(callback) {
        this._onChangeCallbacks.push(callback);
    }

    updateCurrentUrl(url) {
        console.log("new url:", url);

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