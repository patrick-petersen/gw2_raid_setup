import {Component} from "react";
import * as React from "react";

type ItemIconProps = {
    name?: string
    itemId: number
}
type Resolve = (value?: any) => void;

type Items = {[id: number]: Promise<number>[]};
type Promises = {[id: number]: Resolve[]};

class ItemIcon extends Component<ItemIconProps> {
    static loading : Array<number> = [];
    static error : Array<number> = [];
    static items : Items = {};
    static promises : Promises = {};

    state = {
        loaded: false,
        url: "",
    };

    constructor(props: ItemIconProps) {
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

    didLoadItem(itemId: number) {

        // eslint-disable-next-line
        let promise;

        if(ItemIcon.items.hasOwnProperty(itemId)) {
            promise = new Promise((resolve, reject) => {
                resolve(ItemIcon.items[itemId]);
            });
        }
        else {
            let outsideResolve = () => {};
            //let outsideReject;
            promise = new Promise((resolve, reject) => {
                outsideResolve = resolve;
                //outsideReject = reject;
            });
            if(!ItemIcon.promises.hasOwnProperty(itemId)) {
                ItemIcon.promises[itemId] = [];
            }

            ItemIcon.promises[itemId].push(outsideResolve);
        }

        this.loadItem(this.props.itemId);

        return promise;
    }

    resolvePromises(itemId: number, url: string) {
        console.debug("Resolving: ", itemId, url);

        if(ItemIcon.promises.hasOwnProperty(itemId)) {
            let current;
            // eslint-disable-next-line
            while (current = ItemIcon.promises[itemId].pop())
            {
                current(url);
            }
        }
    }

    loadItem(itemId?: number) {
        if(!itemId) return;

        if(!ItemIcon.loading.includes(itemId) && !ItemIcon.error.includes(itemId)) {
            ItemIcon.loading.push(itemId);
            console.debug("Loading " + itemId);

            fetch("https://api.guildwars2.com/v2/items?lang=en&ids=" + itemId)
                .then(response => response.json())
                .then((jsonData) => {
                    // jsonData is parsed json object received from url
                    const item = jsonData[0];
                    console.debug(item);
                    ItemIcon.items[item["id"]] = item["icon"];
                    this.resolvePromises(item["id"], item["icon"]);
                })
                .finally(() => {
                    //remove it from the loading list
                    ItemIcon.loading = ItemIcon.loading.filter(function(item) {
                        return item !== itemId
                    })

                })
                .catch((error) => {
                    // handle your errors here
                    //add the itemId to the error list
                    ItemIcon.error.push(itemId);
                    console.error(error)
                })
        }
    }
    
    componentDidMount() {

        this.didLoadItem(this.props.itemId).then((url) => {
            this.setState({loaded: true, url: url});
        });
    }
}

export default ItemIcon;