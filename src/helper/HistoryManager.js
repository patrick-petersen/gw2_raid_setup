export default class HistoryManager {
    static myInstance = null;

    _startUrl = window.location.hash;
    _currentUrl = this._startUrl;
    _setups = [];
    _players = [];

    _popstateCallbacks = [];

    _defaultSetup = "007981;00792;0079168;00796153;002796;087091;007926;00795;0079;00279;0087976;00796;0027968;0027958;0053792;00792;0079;00795;02796012;0079635;007892;007921;08791026;00796;0047936218;";

    constructor() {
        const hash = window.location.hash.substr(1);
        let setup = "";
        if(hash.length >= 1) {
            setup = hash;
        }
        this.loadSetupFromString(setup);

        window.onpopstate = (event) => {
            console.log("location:", window.location.hash, "state:", event);
            const historyObject = event.state;
            if(historyObject !== null) {
                this._setups = historyObject._setups;
                this._players = historyObject._players;
                this._currentUrl = historyObject._currentUrl;
            }
            else {
                this._setups = [];
                this._players = [];
                this._currentUrl = "#";
            }

            this._popstateCallbacks.forEach(value => value());
        };

        console.log("generate: ", this.generateUrl());
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

    addPopstateCallback(callback) {
        this._popstateCallbacks.push(callback);
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

    getSetupSettings(boss) {
        console.log("loading setup for boss:", boss, this._setups[boss]);
        return (boss in this._setups)?this._setups[boss] : 0;
    }

    saveSetupSettings(boss, value, dontClearPlayers, dontSave) {
        console.log("saving setup for boss:", boss, value, dontClearPlayers);
        this._setups[boss] = value;
        //clear the setup settings after the setup was changed, as these were for a different setup
        if((typeof dontClearPlayers == "undefined") || !dontClearPlayers) {
            console.log("clearing _player[boss]: ", boss);
            this._players[boss] = [];
            if((typeof dontSave == "undefined") || !dontSave) {
                this.updateCurrentUrl();
            }
        }

    }

    getPlayerSettings(boss, setupId) {
        return (role) => {
            if(setupId === this._setups[boss]) {
                return (boss in this._players && role in this._players[boss])?this._players[boss][role]:null;
            }
            else {
                return null;
            }

        }
    }

    savePlayerSettings(boss) {
        return (role) => {
            return (value, dontUpdateUrl) => {
                console.log("save player setting", boss, role, value);
                if(!(boss in this._players)) {
                    this._players[boss] = [];
                }
                this._players[boss][role] = value;

                console.log("dontUpdateUrl:", dontUpdateUrl);

                if((typeof dontUpdateUrl == "undefined") || !dontUpdateUrl) {
                    this.updateCurrentUrl();
                }
            }
        }
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

    generateUrl() {
        let url = "";
        for(let currentSetupIndex=0; currentSetupIndex < this._setups.length; currentSetupIndex++) {
            let currentSetup = this._setups[currentSetupIndex];
            let thisUrlPart = "" + currentSetup;

            if(currentSetupIndex in this._players) {
                for(let currentPlayerIndex=0; currentPlayerIndex < this._players[currentSetupIndex].length; currentPlayerIndex++) {
                    let currentPlayer = this._players[currentSetupIndex][currentPlayerIndex];
                    //console.log("currentPlayer: ", currentPlayer);
                    thisUrlPart += currentPlayer;
                }
            }

            thisUrlPart += ";";
            url += thisUrlPart;
        }
        return url;
    }

    getCurrentUrl() {
        return this._currentUrl;
    }
}