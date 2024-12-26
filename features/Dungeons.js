ChatLib.chat("Dungeons.js is loading!"); // Debug

// --------------------------------- Imports ---------------------------------
import settings from "../config";
import RenderLib from "RenderLib";
import location from "../utils/Location";

import { registerWhen } from "../utils/functions";

// --------------------------------- Variables ---------------------------------
const name = Player.getName(); // Client's name

// --------------------------------- Triggers ---------------------------------
// Dungeon Teammate ESP
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