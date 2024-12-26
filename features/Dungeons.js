ChatLib.chat("Dungeons.js is loading!"); // Debug

// --------------------------------- Imports ---------------------------------
import settings from "../config";
import RenderLib from "RenderLib"
import { registerWhen } from "../utils/functions";
import location from "../utils/Location";

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
            RenderLib.drawEspBox(player.getRenderX(), player.getRenderY(), player.getRenderZ(), 1, 2, settings.dungeonTeammateESPColor.getRed() / 255, settings.dungeonTeammateESPColor.getGreen() / 255, settings.dungeonTeammateESPColor.getBlue() / 255, settings.dungeonTeammateESPColor.getAlpha(), true);
            RenderLib.drawInnerEspBox(player.getRenderX(), player.getRenderY(), player.getRenderZ(), 1, 2, settings.dungeonTeammateESPColor.getRed() / 255, settings.dungeonTeammateESPColor.getGreen() / 255, settings.dungeonTeammateESPColor.getBlue() / 255, settings.dungeonTeammateESPColor.getAlpha() / 1000, true);
        }     
    });
}), () => settings.dungeonTeammateESP && location.getWorld() == "Catacombs");

ChatLib.chat("Dungeons.js is done loading!"); // Debug