console.log("Combat.js is loading!"); // Debug
// --------------------------------- Imports ---------------------------------
import settings from "../config";
import location from "../utils/Location";
import RenderLib from "RenderLib";

import { registerWhen } from "../utils/functions";
import { SMA } from "../utils/constants";

// --------------------------------- Triggers ---------------------------------
// Ghost ESP Trigger (Dwarven Mines GHOSTS)
registerWhen(register("renderWorld", () => {
    const GHOSTS = World.getAllEntitiesOfType(Java.type("net.minecraft.entity.monster.EntityCreeper").class);

    GHOSTS.forEach(creeper => {
        let maxHP = creeper.getEntity().func_110148_a(SMA.field_111267_a).func_111125_b();
        if (maxHP == 1_000_000) {
            RenderLib.drawEspBox(creeper.getRenderX(), creeper.getRenderY(), creeper.getRenderZ(), 0.6, 1.7, settings.ghostEspColor.getRed() / 255, settings.ghostEspColor.getGreen() / 255, settings.ghostEspColor.getBlue() / 255, settings.ghostEspColor.getAlpha(), false);
            RenderLib.drawInnerEspBox(creeper.getRenderX(), creeper.getRenderY(), creeper.getRenderZ(), 0.6, 1.7, settings.ghostEspColor.getRed() / 255, settings.ghostEspColor.getGreen() / 255, settings.ghostEspColor.getBlue() / 255, settings.ghostEspColor.getAlpha() / 1000, false);
        }
    });
}), () => settings.ghostESP && location.getWorld() == "Dwarven Mines");

console.log("Combat.js is done loading!"); // Debug