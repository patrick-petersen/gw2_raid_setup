import React, {Component} from 'react';

class ItemIcon extends Component {
    static loading = [];
    static error = [];
    static items = {};
    static promises = {};

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            url: "",
        };
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

    didLoadItem(itemId) {
        let outsideResolve;
        //let outsideReject;

        let promise = new Promise((resolve, reject) => {
            outsideResolve = resolve;
            //outsideReject = reject;
        });

        if(ItemIcon.items.hasOwnProperty(itemId)) {
            setTimeout( function() {
                outsideResolve(ItemIcon.items[itemId]);
            }, 50)
        }
        else {
            if(!ItemIcon.promises.hasOwnProperty(itemId)) {
                ItemIcon.promises[itemId] = [];
            }

            ItemIcon.promises[itemId].push(outsideResolve);
        }

        this.loadItem(this.props.itemId);

        return promise;
    }

    resolvePromises(itemId, url) {
        console.log("Resolving: ", itemId, url);

        if(ItemIcon.promises.hasOwnProperty(itemId)) {
            let current;
            while (current = ItemIcon.promises[itemId].pop())
            {
                current(url);
            }
        }
    }

    loadItem(itemId) {
        if(!ItemIcon.loading.includes(itemId) && !ItemIcon.error.includes(itemId)) {
            ItemIcon.loading.push(itemId);
            console.log("Loading " + itemId);

            fetch("https://api.guildwars2.com/v2/items?ids=" + itemId)
                .then(response => response.json())
                .then((jsonData) => {
                    // jsonData is parsed json object received from url
                    const item = jsonData[0];
                    console.log(item);
                    ItemIcon.items[item["id"]] = item["icon"];
                    this.resolvePromises(item["id"], item["icon"]);
                })
                .finally(() => {
                    //remove it from the loading list
                    ItemIcon.loading[itemId] = ItemIcon.loading.filter(function(item) {
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