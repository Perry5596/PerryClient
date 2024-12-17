ChatLib.chat("General.js is loading!"); // Debug

// --------------------------------- Imports ---------------------------------
import settings from "../config";
import { registerWhen } from "../utils/functions";

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
    triggerAlert("§c§lPIGGY CRACKED!", 400);
}).setCriteria("&cYou died and your piggy bank cracked!").setContains(), () => settings.piggyBankAlert);

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