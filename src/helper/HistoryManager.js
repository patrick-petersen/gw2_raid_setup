export default class HistoryManager {
    static myInstance = null;

    _startUrl = window.location.hash;
    _currentUrl = this._startUrl;
    _setups = [];
    _players = [];

    _demoString = "";

    constructor() {
        this.loadSetupFromString(this._demoString);
        /*
        window.onpopstate = function(event) {
            console.log("location:", document.location, "state:", event)
        };
         */
    }

    /**
     * @returns {HistoryManager}
     */
    static getInstance() {
        if (HistoryManager.myInstance == null) {
            HistoryManager.myInstance = new HistoryManager();
        }

        return this.myInstance;
    }

    loadSetupFromString(source) {
        source.split(";").map((value, index) => {
           //Looping through bosses
           let bossNumber = index;
           if(value.length > 0) {
               let setup = value.charAt(0);
               this._setups[bossNumber] = setup;

               if(value.length > 1) {
                   this._players[index] = [];
                   for (let i = 1; i < value.length; i++) {
                       let player = parseInt(value.charAt(i));
                       this._players[index][i-1] = player;
                   }
               }
           }
        });
    }

    getSetupSettings(boss) {
        console.log("loading setup for boss:", boss, this._setups[boss]);
        return (boss in this._setups)?this._setups[boss] : 0;
    }

    saveSetupSettings(boss, value) {
        console.log("saving setup for boss:", boss, value);
        this._setups[boss] = value;
    }

    getPlayerSettings(boss) {
        return (role) => {
            return (boss in this._players && role in this._players[boss])?this._players[boss][role]:null;
        }
    }

    savePlayerSettings(boss) {
        return (role) => {
            return (value) => {
                this._players[boss][role] = value;
                this.updateCurrentUrl();
            }
        }
    }

    updateCurrentUrl() {
        //TODO:
    }

    getCurrentUrl() {
        return this._currentUrl;
    }
}