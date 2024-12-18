ChatLib.chat("Trophy.js is loading!"); // Debug

// --------------------------------- Imports ---------------------------------
import settings from "../config";
import RenderLib from "RenderLib"
import { registerWhen } from "../utils/functions";
import { getWorld } from "../utils/world";
import { colors } from "../utils/constants";

// --------------------------------- Functions ---------------------------------
function makeTrophyWaypoint(name, x, y, z) {
    let distance = Math.floor(Math.sqrt(Math.pow(Player.getX() - x, 2)+ Math.pow(Player.getZ() - z, 2)));
    // (x, y, z, w, h, red, green, blue, alpha, seeThroughWalls?)
    RenderLib.drawEspBox(x, y, z, 1, 1, 0, 0.7, 0.90, 1, true);
    RenderLib.drawInnerEspBox(x, y, z, 1, 1, 0, 0.7, 0.90, 0.5, false);
    Tessellator.drawString(name, x, y + 1.5, z, colors.AQUA, true);
    Tessellator.drawString(`${distance}m`, x, y + 1.25, z, colors.YELLOW, true);
}

// --------------------------------- Triggers ---------------------------------
// Trophy Fish Waypoints
registerWhen(register("renderWorld", () => {
    makeTrophyWaypoint("Flyfish/Volcanic", -355.5, 154, -840.5);
    makeTrophyWaypoint("Moldfin", -268.5, 100, -750.5);
    makeTrophyWaypoint("Skeleton", -470.5, 104, -756.5);
    makeTrophyWaypoint("Soul", -295.5, 135, -558.5);
    makeTrophyWaypoint("Karate", -221.5, 108, -569.5);
}), () => settings.renderTrophyLocations && getWorld() == "Crimson Isle");

ChatLib.chat("Trophy.js is done loading!"); // Debug