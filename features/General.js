console.log("General.js is loading!"); // Debug
// --------------------------------- Imports ---------------------------------
import settings from "../config";
import location from "../utils/Location";

import { consts } from "../utils/constants";
import { registerWhen } from "../utils/functions";
import { data } from "../utils/data";
import { sendWebhook } from "../utils/webhook";

// --------------------------------- Variables ---------------------------------
let afk = false;

// --------------------------------- Triggers ---------------------------------
// Piggy Bank Trigger
registerWhen(register("chat", () => {
    Client.showTitle("§c§lPIGGY CRACKED!", "", 5, 80, 5);
}).setCriteria("&cYou died and your piggy bank cracked!").setContains(), () => settings.piggyBankAlert);

// Full Sack of Sacks Notification Trigger
registerWhen(register("chat", () => {
    Client.showTitle("§c§lA SACK IS FULL!", "", 5, 80, 5);
}).setCriteria("&eYour Combat Sack &r&eis full of &r&fEnder Pearl").setContains(), () => settings.sackFullAlert);

// Booster Cookie Notification Trigger
registerWhen(register("postGuiRender", () => {
    // postGuiRender may be temporary as it requrires the player to open some form
    // of GUI to trigger the event. If a better event is found, it will be replaced.
    if (location.getWorld() !== undefined) {
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
                    Client.showTitle("§a§lCookie Buff Active!", "", 5, 80, 5);
                } else {
                    ChatLib.chat(`\n${ consts.PREFIX } &aBooster Cookie is no longer active!\n`);
                    Client.showTitle("§a§lCookie Buff Inactive!", "", 5, 80, 5);
                }
            }
        }
    }
}), () => settings.boosterCookieAlert);

// AFK Webhook Notification Trigger
registerWhen(register("renderTitle", (title) => {
    if (title.includes("You are AFK") && !afk) {
        afk = true;
        sendWebhook("AFK Alert", "You have gone AFK!");
    }
}), () => settings.webhookToggle && settings.webhookURL.startsWith("https://discord.com/api/webhooks/"));

register("step", () => {
    const looking = Player.lookingAt().toString().startsWith("Sign");
    if (afk && !looking) {
        afk = false;
    }
}).setDelay(60);

// Click to Visit Trigger
registerWhen(
register("chat", (username, event) => {
    cancel(event);
    ChatLib.chat(new TextComponent(ChatLib.getChatMessage(event, true))
        .setHover('show_text', `/visit ${username}`)
        .setClick('run_command', `/visit ${username}`));
}).setCriteria(/(?:(?:Guild|Party|Co-op|From|To) ?(?:>)?? |(?:(?:\[:v:\] )?(?: \+ )?(?:\[(?:[^\s]+)+\] )??))??(?:. )??(?:\[\w{3,}\+{0,2}\] )??(\w{1,16})(?: \[\w{1,6}\])??: .*visit.*$/i),
() => settings.clickToVisit);

// --------------------------------- Exports ---------------------------------
console.log("General.js is done loading!"); // Debug