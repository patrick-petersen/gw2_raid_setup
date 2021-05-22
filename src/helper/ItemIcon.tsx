import {Component} from "react";

type ItemIconProps = {
    name?: string,
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

    render() : JSX.Element  {
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

    didLoadItem(itemId: number) : Promise<any> {
        let promise;

        if(Object.prototype.hasOwnProperty.call(ItemIcon.items, itemId)) {
            promise = new Promise((resolve) => {
                resolve(ItemIcon.items[itemId]);
            });
        }
        else {
            // eslint-disable-next-line
            let outsideResolve = (_: any) => {};

            promise = new Promise((resolve) => {
                outsideResolve = resolve;
            });
            if(!Object.prototype.hasOwnProperty.call(ItemIcon.promises, itemId)) {
                ItemIcon.promises[itemId] = [];
            }

            ItemIcon.promises[itemId].push(outsideResolve);
        }

        this.loadItem(this.props.itemId);

        return promise;
    }

    resolvePromises(itemId: number, url: string) : void {
        console.debug("Resolving: ", itemId, url);

        if(Object.prototype.hasOwnProperty.call(ItemIcon.promises, itemId)) {
            let current;
            // eslint-disable-next-line
            while (current = ItemIcon.promises[itemId].pop())
            {
                current(url);
            }
        }
    }

    loadItem(itemId?: number) : void {
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
    
    componentDidMount() : void {
        this.didLoadItem(this.props.itemId).then((url) => {
            this.setState({loaded: true, url: url});
        });
    }
}

export default ItemIcon;