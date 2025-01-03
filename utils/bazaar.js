import { request } from "../../requestV2"
import { consts } from "./constants";
import { comma } from "./constants";

// TODO: Recreate the bazzar data system so that it is update with current items. Some items
// such as NETHER_STAR dont exist in this data, so the data can't be fetched.

// Credit: Adapted from VolcAddons
const bazaar = {
    data: {},
    setData(items) {
        this.data = items;
        FileLib.write("PerryClient", "/data/bazaar.json", JSON.stringify(this.data, null, 2));
    },
    getPrices(name) {
        const item = this.data[name];
        if (item) {
            return [item[0], item[1]]; // Buy order is the first element, sell offer is the second element
        }
        return null;
    }
};

function updateBazaar() {
    request({
        url: "https://volcaronitee.pythonanywhere.com/bazaar",
        json: true,
    })
    .then((response) => {
        if (!response.items) return;
        bazaar.setData(response.items);
    })
    .catch((err) => console.error(`${consts.PREFIX}: ${err.cause ?? err}`));
}
updateBazaar();

/**
 * Calls for an update every X seconds.
 */
register("step", () => {
    updateBazaar();
}).setDelay(600);

/**
 * Updates the bazaar data and notifies the user upon successful update.
 */
register("command", () => {
    updateBazaar();
    ChatLib.chat(`${consts.PREFIX} &2Successfully updated Bazaar data!`);
}).setName("updateBazaar");

register("command", (...itemParts) => {
    // Join all parts of the array together with underscores and make it all uppercase
    const item = itemParts.join("_").toUpperCase();
    
    const prices = bazaar.getPrices(item);
    if (prices) {
        ChatLib.chat(`${consts.PREFIX} - ${item}:\n&3Instant Buy: &e${comma(Math.round(prices[1]))}\n&3Instant Sell: &e${comma(Math.round(prices[0]))}\n&3Quantity: &e${consts.WIP}`); // Implement quantity later...
    } else {
        ChatLib.chat(`${consts.PREFIX} &cItem not found in Bazaar data.`);
    }
}).setName("bzdata");