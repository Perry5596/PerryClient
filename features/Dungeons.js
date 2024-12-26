ChatLib.chat("Dungeons.js is loading!"); // Debug

// --------------------------------- Imports ---------------------------------
import settings from "../config";
import RenderLib from "RenderLib"
import { registerWhen } from "../utils/functions";
import { getWorld } from "../utils/world";
import { colors } from "../utils/constants";

// --------------------------------- Variables ---------------------------------
const name = Player.getName(); // Client's name

// --------------------------------- Triggers ---------------------------------

// Plan right now is to locate the "EntityOtherPlayerMP" class, then get the name field from it.
// I then need to check that name against the tab menu. If it matches any names visible in that
// tab menu, I'll draw a box around that player.

registerWhen(register("renderWorld", () => {
    const PLAYERS = World.getAllPlayers().filter(player => player.getPing() > 0); // Checks to see if player is a real player, not an NPC

    PLAYERS.forEach(player => {
        if (player.getName() != name) {
            RenderLib.drawEspBox(player.getRenderX(), player.getRenderY(), player.getRenderZ(), 1, 2, settings.ghostEspColor.getRed() / 255, settings.ghostEspColor.getGreen() / 255, settings.ghostEspColor.getBlue() / 255, settings.ghostEspColor.getAlpha(), true);
            RenderLib.drawInnerEspBox(player.getRenderX(), player.getRenderY(), player.getRenderZ(), 1, 2, settings.ghostEspColor.getRed() / 255, settings.ghostEspColor.getGreen() / 255, settings.ghostEspColor.getBlue() / 255, settings.ghostEspColor.getAlpha() / 500, true);
        }     
    });
}), () => true);

ChatLib.chat("Dungeons.js is done loading!"); // Debug