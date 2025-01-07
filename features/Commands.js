console.log("Commands.js is loading!"); // Debug

// --------------------------------- Imports ---------------------------------
import location from "../utils/Location";
import settings from "../config";

import { comma } from "../utils/constants";
import { consts } from "../utils/constants";
import { sendWebhook } from "../utils/webhook";

// --------------------------------- Variables ---------------------------------
let reminders = []; // Array to store active reminders

// --------------------------------- QOL Commands ---------------------------------
register("command", () => { ChatLib.command("skyblock") }).setName("sb");
register("command", () => { ChatLib.command("boostercookiemenu") }).setName("bc")
register("command", () => { ChatLib.command("visit portalhub") }).setName("ph").setAliases("portal", "portals", "portalhub");
register("command", () => { ChatLib.command("collections") }).setName("col").setAliases("coll");
register("command", () => { ChatLib.command("skills") }).setName("sk").setAliases("skill");
register("command", () => { ChatLib.command("warp hollows") }).setName("ch").setAliases("hollows", "crystal");
register("command", () => { ChatLib.command("warp kuudra") }).setName("ku").setAliases("kuudra");
register("command", () => { ChatLib.command("warp dungeon_hub") }).setName("dh");
register("command", () => { ChatLib.command("warp museum") }).setName("museum");
register("command", () => { ChatLib.command("warp garden") }).setName("garden");

// --------------------------------- Functions ---------------------------------
// Send reminder function
function sendReminder(reminder) {
  if (settings.webhookToggle && settings.webhookURL.startsWith("https://discord.com/api/webhooks/")) {
    sendWebhook("Reminder", reminder.message);
  }
  ChatLib.chat(`\n${consts.PREFIX}\n&6Reminder: &e"${reminder.message}"\n`);
  reminders = reminders.filter(r => r !== reminder);
}

// --------------------------------- Feature Commands ---------------------------------
// Register the /remind command
register("command", (time, ...messageParts) => {
  if (!time) {
      // Show usage instructions when no arguments are provided
      ChatLib.chat("&bUsage: &a/remind {time in minutes} {message}");
      ChatLib.chat("&bExample: &a/remind 10 Take a break!");
      return;
  }

  const minutes = parseInt(time, 10);
  const message = messageParts.join(" ");

  // Validate time input
  if (isNaN(minutes) || minutes <= 0) {
      ChatLib.chat("&cInvalid time! Please specify the time in minutes as a positive number.");
      return;
  }

  if (!message) {
      ChatLib.chat("&cPlease provide a message for the reminder.");
      return;
  }

  // Set up reminder
  const reminder = {
      time: Date.now() + minutes * 60000,
      message: message,
  };
  reminders.push(reminder);

  // Chat alert
  ChatLib.chat(`${consts.PREFIX} &aReminder set! We will remind you in &e${minutes} minute(s)!`);

  // Schedule webhook
  setTimeout(() => {
      sendReminder(reminder);

  }, minutes * 60000);
})
  .setName("remind")
  .setAliases("reminder", "remindme")
  .setTabCompletions("{time in minutes} {message}");

// Detect game close and send remaining reminders
register("gameUnload", () => {
  if (reminders.length > 0) {
      reminders.forEach(reminder => {
        reminder.message += "\n\n(GAME CLOSED) - Sending reminder early!"
        sendReminder(reminder);
  });
  }
});


register("command", () => {
    ChatLib.chat(location.getWorld());
}).setName("getWorld", true);

// Credit: NWJN Addons
register("command", () => {
    let rarity = "None"
    const holding = Player.getHeldItem()
    holding?.getLore()?.forEach(line => {
      if (line.toString().includes("COMMON") || line.toString().includes("RARE") || line.toString().includes("EPIC") || line.toString().includes("LEGENDARY") || line.toString().includes("MYTHIC") || line.toString().includes("DIVINE") || line.toString().includes("SPECIAL")) rarity = line
    })
    ChatLib.chat(`\nName: ${ holding?.getName() }\nRegistry Name: ${ holding?.getRegistryName() }\nSkyblock ID: ${ holding?.getNBT()?.getCompoundTag("tag")?.getCompoundTag("ExtraAttributes")?.getString("id") }\nRarity: ${ rarity }\n`)
  }).setName("itemInfo", true).setAliases("item");

// Credit: NWJN Addons
register("command", () => {
    const looking = Player.lookingAt()
  
    if (!looking.toString().startsWith("Entity")) {
      ChatLib.chat(looking)
      return
    }
    ChatLib.chat(`\nName: ${looking.getName()}\nEntityClass: ${looking.getClassName()}\nPos: ${looking.getPos()}\nHP: ${comma(looking.getEntity().func_110143_aJ())}/${comma(looking.getEntity().func_110148_a(Java.type('net.minecraft.entity.SharedMonsterAttributes').field_111267_a).func_111125_b())}\n`)
  }).setName("entityInfo", true).setAliases("entity");

console.log("Commands.js is done loading!"); // Debug