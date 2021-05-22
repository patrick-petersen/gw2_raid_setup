import HistoryManager, {historyObjectType, List, Settings} from "./HistoryManager";

export default class CustomHashHistoryManager extends HistoryManager {
    constructor(list: List, playerSettings : Settings) {
        super(list, playerSettings);
/*
        window.onpopstate = (event : PopStateEvent) => {
            const hash = this.getHash();
            const historyObject : historyObjectType = event.state;
            this.changedHash(historyObject, hash);
        };
 */
    }

    getHash() : string {
        return "";
        /*
        console.log("location:", window.location.hash);
        return window.location.hash.substr(1);
        */
    }

    // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
    saveHash(historyObject : historyObjectType, hash : string) : void {
        /*
        window.history.pushState(historyObject, "[Koss] Raidplaner", "#"+hash);
         */
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    changedHash(historyObject : historyObjectType, hash : string) : void {
    /*
        if(historyObject !== null) {
            this._list = historyObject._list;
            this._currentHash = historyObject._currentHash;
            this.callOnChangeCallbacks();
        }
        else {
            //In case there is no history object
            //i.e. back to initial load, or manually editing the hash
            let setup = "";
            if(hash.length >= 1) {
                setup = hash;
            }
            this.updateListFromHash(setup);
            this._currentHash = hash;
        }
     */
    }

}