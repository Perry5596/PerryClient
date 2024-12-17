// debug
ChatLib.chat("General.js is loading!");

// --------------------------------- Imports ---------------------------------
import Settings from "../config";

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
const piggyBankTrigger = register("chat", (message) => {
    const rawMessage = ChatLib.getChatMessage(message).trim(); // Extract the message

    // Make sure to include the Setting property to check if the alert is enabled...
    if (Settings.piggyBankAlert && rawMessage.includes("§cYou died and your piggy bank cracked!")) {
        triggerAlert("§c§lPIGGY CRACKED!", 400); // Trigger the alert
    }
});

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
export { piggyBankTrigger };