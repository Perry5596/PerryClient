import PogObject from "PogData"

export let data = new PogObject("Perry",{
    // Add in lines here for data you want to save:
    "first_time": true,
    "version": "1.0.0",
    "booster_cookie": true
}, "/data/data.json")

register("gameUnload", () => {
    data.save();
  });