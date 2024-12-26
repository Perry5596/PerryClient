ChatLib.chat("index.js is loading!"); // Debug
// --------------------------------- Debug Message ---------------------------------
register("command", () => {
    ChatLib.chat(
      `\n&3&lPerry&6Client &7Debug:
   &eCT Version: &7v${ChatTriggers.MODVERSION}
   &3Perry§6Client &7v${JSON.parse(FileLib.read("Perry", "metadata.json")).version}`
    );
  }).setCommandName("perryTest");

// --------------------------------- Imports ---------------------------------

import settings from "./config";
import "./features/General";
import "./features/Trophy";
import "./features/Commands";
import "./features/Dungeons";

import { version, consts } from "./utils/constants";
import { setRegisters } from "./utils/functions"
import { openGUI } from "./utils/overlay"
import { resetWorld } from "./utils/world";
import { data } from "./utils/data";


// --------------------------------- Welcome Message ---------------------------------

if (data.first_time) {
  data.first_time = false; 
  data.save();

  ChatLib.chat("");
  ChatLib.chat(`&r&7&m--------------&r${ consts.PREFIX }&r&7&m--------------`)
  ChatLib.chat(`&aUse '/perry' For settings!`)
  ChatLib.chat(`&aUse '/perry commands' For commands!`);
  new TextComponent(`&aClick &3here&a to copy the GitHub link!`)
    .setClickAction("run_command")
    .setClickValue(`/ct copy https://github.com/Perry5596/Perry`)
    .chat()
  ChatLib.chat("");
};

// --------------------------------- Commands ---------------------------------

register("command", (arg) => {  
  if (!arg) {
    settings.openGUI();
    return;
  }
  arg = arg?.toLowerCase()
  
  switch (arg) {
    case "gui":
      openGUI();
      break;
    case "ver":
    case "version":
      ChatLib.chat(`${ consts.PREFIX } &bYou are currently on version &e${ version }`);
      break;
    case "commands":
      ChatLib.chat(`${ consts.PREFIX } &rWrite out commands here...`);
      break;
    case "reload":
      resetWorld()
      ChatLib.chat(`${ consts.PREFIX } &aReloaded all registers!`);
      break;
    default:
      ChatLib.chat(`${consts.PREFIX} &r\n/perry => opens settings\n/perry gui => opens gui mover\n/perry version => gets the current Perry Client version\n/perry commands => see all commands\n/perry reload => reloads all registers in case they aren't working`)
  }
}).setCommandName(`perry`, true).setAliases("perryp_", "per").setTabCompletions("gui", "version", "commands", "reload");

register("guiClosed", (event) => {
  if (event?.toString()?.includes("vigilance")) {
    setRegisters()
  }
});

// --------------------------------- Extra Triggers ---------------------------------
ChatLib.chat("index.js is done loading!");