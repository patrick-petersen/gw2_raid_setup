import settings from "./settings"

export default class HistoryManager {
    static myInstance = null;

    _startUrl = window.location.hash;
    _currentUrl = this._startUrl;
    _setups = [];
    _players = [];

    _demoString = "007481;0074;0074168;00796143;002796;087091;007926;00795;0074;00279;0087976;00796;002796;0027951;0053792;00799;0079;00795;02796014;0079635;007492;007921;08791026;00796;0027936418;";

    constructor() {
        this.loadSetupFromString(this._demoString);
        /*
        window.onpopstate = function(event) {
            console.log("location:", document.location, "state:", event)
        };
         */
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

    loadSetupFromString(source) {
        source.split(";").map((value, index) => {
           //Looping through bosses
           let bossNumber = index;
           if(value.length <= 0) {
               this._setups[bossNumber] = 0;
           }
           else {
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

    saveSetupSettings(boss, value, dontClearPlayers) {
        console.log("saving setup for boss:", boss, value);
        this._setups[boss] = value;
        //clear the setup settings after the setup was changed, as these were for a different setup
        if((typeof dontClearPlayers != "undefined") && !dontClearPlayers) {
            this._players[boss] = [];
        }

        this.updateCurrentUrl();
    }

    getPlayerSettings(boss) {
        return (role) => {
            return (boss in this._players && role in this._players[boss])?this._players[boss][role]:null;
        }
    }

    savePlayerSettings(boss) {
        return (role) => {
            return (value) => {
                console.log("save player setting", boss, role, value);
                if(!(boss in this._players)) {
                    this._players[boss] = [];
                }
                this._players[boss][role] = value;
                this.updateCurrentUrl();
            }
        }
    }

    updateCurrentUrl() {
        console.log("new url:", this.generateUrl());
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