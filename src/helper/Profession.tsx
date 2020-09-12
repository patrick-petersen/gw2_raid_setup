import {Component} from "react";
import * as React from "react";

type Professions = {[id: string]: Resolve[]};
type Promises = {[id: string]: Resolve[]};

type Resolve = (value?: any) => void;

type ProfessionState = {
    loaded: boolean,
    url: string
}
type ProfessionProps = {
    name: string
}

class Profession extends Component<ProfessionProps> {
    static loading = false;
    static error = false;
    static professions : Professions = {};
    static promises : Promises = {};

    state : ProfessionState = {
        loaded: false,
        url: "",
    };

    constructor(props: ProfessionProps) {
        super(props);
    }

    render() {
        if (!this.state.loaded) {
            return (
                <span>{this.props.name}</span>
            )
        }
        else {
            return (
                <img src={this.state.url} alt={this.props.name}/>
            )
        }
    }

    didLoadProfession(profession: string) {

        let promise;

        if(Profession.professions.hasOwnProperty(profession)) {
            promise = new Promise((resolve, reject) => {
                resolve(Profession.professions[profession]);
            });
        }
        else {
            let outsideResolve;
            //let outsideReject;
            promise = new Promise((resolve, reject) => {
                outsideResolve = resolve;
                //outsideReject = reject;
            });
            if(!Profession.promises.hasOwnProperty(profession)) {
                Profession.promises[profession] = [];
            }

            Profession.promises[profession].push(outsideResolve);
        }

        return promise;
    }

    resolvePromises(profession: string, url: string) {
        console.debug("resolving", profession, url);
        if(Profession.promises.hasOwnProperty(profession)) {
            let current : Resolve;
            // eslint-disable-next-line
            while (current = Profession.promises[profession].pop())
            {
                current(url);
            }
        }
    }

    loadProfessions() {
        console.debug("loading professions");
        if(!Profession.loading && !Profession.error) {
            Profession.loading = true;
            console.debug("Loading!");
            fetch("https://api.guildwars2.com/v2/professions?lang=en")
                .then(response => response.json())
                .then((jsonData) => {
                    // jsonData is parsed json object received from url
                    console.debug(jsonData);
                    for(let index in jsonData) {
                        if(!jsonData.hasOwnProperty(index)) {
                            continue;
                        }
                        let profession = jsonData[index];
                        fetch("https://api.guildwars2.com/v2/professions/" + profession + "?lang=en")
                            .then(response => response.json())
                            .then((jsonData) => {
                                // jsonData is parsed json object received from url
                                console.debug(jsonData);
                                Profession.professions[jsonData["name"]] = jsonData["icon_big"];
                                this.resolvePromises(jsonData["name"], jsonData["icon_big"]);

                                this.loadSpecs(jsonData["specializations"]);
                            })
                            .catch((error) => {
                                // handle your errors here
                                console.error(error)
                            })
                    }
                })
                .catch((error) => {
                    // handle your errors here
                    console.error(error);
                    Profession.error = true;
                    Profession.loading = false;
                })
                .finally(() => {
                    //Its not done, only the first request is done here
                    //Profession.loading = false;
                })
        }
    }

    loadSpecs(ids : number[]) {
        for(let index in ids) {
            if(!ids.hasOwnProperty(index)) {
                continue;
            }
            let spec = ids[index];
            fetch("https://api.guildwars2.com/v2/specializations/" + spec + "?lang=en")
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                console.debug(jsonData);
                Profession.professions[jsonData["name"]] = jsonData["profession_icon_big"];
                this.resolvePromises(jsonData["name"], jsonData["profession_icon_big"]);

                this.loadSpecs(jsonData["specializations"]);
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
        }
    }

    componentDidMount() {
        this.didLoadProfession(this.props.name).then((url) => {
            this.setState({loaded: true, url: url});
        });

        this.loadProfessions();
    }
}

export default Profession;