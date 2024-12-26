ChatLib.chat("General.js is loading!"); // Debug

// --------------------------------- Imports ---------------------------------
import settings from "../config";
import RenderLib from "RenderLib"
import { registerWhen } from "../utils/functions";
import { colors, SMA } from "../utils/constants";
import { getWorld } from "../utils/world";

// --------------------------------- Variables ---------------------------------

let alertTimer = 0;
let alertText = "";

// --------------------------------- Functions ---------------------------------

// Function to trigger an alert
function triggerAlert(text, time) {
    alertText = text; // Set the text to display
    alertTimer = time; // Set the timer duration (in ticks)
}

// --------------------------------- Triggers ---------------------------------
// Piggy Bank Trigger
registerWhen(register("chat", () => {
    triggerAlert("§c§lPIGGY CRACKED!", 1000);
}).setCriteria("&cYou died and your piggy bank cracked!").setContains(), () => settings.piggyBankAlert);

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
}), () => settings.ghostESP && getWorld() == "Dwarven Mines");

// --------------------------------- Overlays ---------------------------------

// Alert Overlay
register("renderOverlay", () => {
    if (alertTimer > 0) {
        // Set the scale factor
        const scale = 4;
        Renderer.scale(scale, scale);

        // Calculate centered position after scale
        const centeredX = (Renderer.screen.getWidth() / 2) / scale - Renderer.getStringWidth(alertText) / 2;
        const centeredY = (Renderer.screen.getHeight() / 3) / scale; // Adjust Y if needed

        // Draw the scaled text
        Renderer.drawStringWithShadow(alertText, centeredX, centeredY);

        // Reset scaling back to normal
        Renderer.scale(1, 1);

        alertTimer--; // Decrease the timer each tick
    }
});

// --------------------------------- Exports ---------------------------------
ChatLib.chat("General.js is done loading!");