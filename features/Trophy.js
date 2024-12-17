ChatLib.chat("Trophy.js is loading!"); // Debug

// --------------------------------- Imports ---------------------------------
import settings from "../config";
import RenderLib from "RenderLib"
import { registerWhen } from "../utils/functions";
import { getWorld } from "../utils/world";
import { colors } from "../utils/constants";

// --------------------------------- Variables ---------------------------------

// --------------------------------- Functions ---------------------------------

// --------------------------------- Triggers ---------------------------------
// Trophy Locations Render
registerWhen(register("renderWorld", () => {
    // (x, y, z, w, h, red, green, blue, alpha, seeThroughWalls?)
    let x = -360;
    let y = 82;
    let z = -457;

    let distance = Math.floor(Math.sqrt(Math.pow(Player.getX() - x, 2)+ Math.pow(Player.getZ() - z, 2)));

    RenderLib.drawEspBox(x, y, z, 1, 1, 0, 0.7, 0.90, 1, true);
    RenderLib.drawInnerEspBox(x, y, z, 1, 1, 0, 0.7, 0.90, 0.5, false);
    Tessellator.drawString("Trophy Fish 1", x, y + 1.5, z, colors.AQUA, true);
    Tessellator.drawString(`${distance}m`, x, y + 1.25, z, colors.YELLOW, true);

}), () => settings.renderTrophyLocations && getWorld() == "Crimson Isle");


ChatLib.chat("Trophy.js is done loading!"); // Debug