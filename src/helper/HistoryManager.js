export default class HistoryManager {
    static myInstance = null;

    _startUrl = window.location.hash;
    _currentUrl = this._startUrl;
    _setups = [];
    _players = [];

    constructor() {
        this._setups = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        this._setups.forEach((value, index) => {
            this._players[index] = [0,0,0,0,0,0,0,0,0,0];
        });
        //this._parseUrlHash(this._startUrl);

        window.onpopstate = function(event) {
            console.log("location:", document.location, "state:", event)
        };
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

    getSetupSettings(boss) {
        console.log("loading setup for boss:", boss, this._setups[boss]);
        return this._setups[boss];
    }

    saveSetupSettings(boss, value) {
        console.log("saving setup for boss:", boss, value);
        this._setups[boss] = value;
    }

    getPlayerSettings(boss) {
        return (role) => {
            return null;
            //return this._players[boss][role];
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