ChatLib.chat("General.js is loading!"); // Debug

// --------------------------------- Imports ---------------------------------
import settings from "../config";
import location from "../utils/Location";
import RenderLib from "RenderLib";
import { consts } from "../utils/constants";

import { registerWhen } from "../utils/functions";
import { SMA } from "../utils/constants";
import { data } from "../utils/data";

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
}), () => settings.ghostESP && location.getWorld() == "Dwarven Mines");

// Booster Cookie Notification Trigger
register("renderWorld", () => {
    const footer = TabList.getFooter();
    const cookieBuffIndex = footer.indexOf("Cookie Buff");
    const ranksIndex = footer.indexOf("Ranks");
    if (cookieBuffIndex !== -1) {
        let textAfterCookieBuff;
        if (ranksIndex !== -1 && ranksIndex > cookieBuffIndex) {
            textAfterCookieBuff = footer.substring(cookieBuffIndex + "Cookie Buff".length, ranksIndex).trim();
        } else {
            textAfterCookieBuff = footer.substring(cookieBuffIndex + "Cookie Buff".length).trim();
        }
        const active = textAfterCookieBuff.match("Not active!") ? false : true;

        if (data.booster_cookie !== active) {
            data.booster_cookie = active;
            data.save();

            if (active) {
                ChatLib.chat(`\n${ consts.PREFIX } &aBooster Cookie is now active!\n`);
            } else {
                ChatLib.chat(`\n${ consts.PREFIX } &aBooster Cookie is no longer active!\n`);
            }
        }
    } else {
        ChatLib.chat("ERROR: 'Cookie Buff' not found in footer. Open issue on github.");
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
ChatLib.chat("General.js is done loading!");