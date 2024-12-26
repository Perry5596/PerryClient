// Credit: Adapted from Volcaddons findworld
import { delay, setRegisters } from "./functions";

class Location {
    #world = undefined;

    constructor() {
        register("worldLoad", () => {
            this.findWorld();
        }).setPriority(Priority.LOWEST);
      
        register("worldUnload", () => {
            this.#world = undefined;
            setRegisters((off = true));
        });
    }

    getWorld() {
        return this.#world;
    }

    findWorld = (noFind = 0) => {
        // Make sure Hypixel world is loaded)
        if (noFind > 9) return;
        else if (!World.isLoaded()) delay(() => this.findWorld(noFind + 1), 1000);
    
        // Get world from tab list
        let world = TabList.getNames()?.find((tab) => tab.startsWith("§r§b§lArea:") || tab.startsWith("§r§b§lDungeon:"));
        if (world === undefined) delay(() => this.findWorld(noFind + 1), 1000);
        else {
          // Get world formatted
          this.#world = world.removeFormatting().split(" ").splice(1).join(" ");
        }
      };
}
export default new Location();