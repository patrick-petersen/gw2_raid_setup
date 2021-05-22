import {Component} from "react";

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

    render() : JSX.Element {
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

    didLoadProfession(profession: string) : Promise<any> {

        let promise;

        if(Object.prototype.hasOwnProperty.call(Profession.professions, profession)) {
            promise = new Promise((resolve) => {
                resolve(Profession.professions[profession]);
            });
        }
        else {
            // eslint-disable-next-line
            let outsideResolve = (_ : any) => {};
            promise = new Promise((resolve) => {
                outsideResolve = resolve;
                //outsideReject = reject;
            });
            if(!Object.prototype.hasOwnProperty.call(Profession.promises, profession)) {
                Profession.promises[profession] = [];
            }

            Profession.promises[profession].push(outsideResolve);
        }

        return promise;
    }

    resolvePromises(profession: string, url: string) : void {
        console.debug("resolving", profession, url);
        if(Object.prototype.hasOwnProperty.call(Profession.promises, profession)) {
            let current : Resolve | undefined;

            //This loop is intentional, it gets a promise,
            // resolves it and removes it from the list of unresolved promises
            // eslint-disable-next-line
            while (current = Profession.promises[profession].pop())
            {
                current(url);
            }
        }
    }

    loadProfessions() : void {
        console.debug("loading professions");
        if(!Profession.loading && !Profession.error) {
            Profession.loading = true;
            console.debug("Loading!");
            fetch("https://api.guildwars2.com/v2/professions?lang=en")
                .then(response => response.json())
                .then((jsonData) => {
                    // jsonData is parsed json object received from url
                    console.debug(jsonData);
                    for(const index in jsonData) {
                        if(!Object.prototype.hasOwnProperty.call(jsonData, index)) {
                            continue;
                        }
                        const profession = jsonData[index];
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

    loadSpecs(ids : number[]) : void {
        for(const index in ids) {
            if(!Object.prototype.hasOwnProperty.call(ids, index)) {
                continue;
            }
            const spec = ids[index];
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

    componentDidMount() : void {
        this.didLoadProfession(this.props.name).then((url) => {
            this.setState({loaded: true, url: url});
        });

        this.loadProfessions();
    }
}

export default Profession;