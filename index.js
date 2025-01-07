// Debug Message
register("command", () => {
  ChatLib.chat(
    `&3&lPerry&6Client &7Debug:
 &eCT Version: &7v${ChatTriggers.MODVERSION}
 &3Perry§6Client &7v${JSON.parse(FileLib.read("PerryClient", "metadata.json")).version}`
  );
}).setCommandName("peTest");
// --------------------------------- Imports ---------------------------------

import settings from "./config";
import location from "./utils/Location";

import "./features/General";
import "./features/Trophy";
import "./features/Commands";
import "./features/Dungeons";

import "./utils/bazaar";
import "./utils/uuid";

import { version, consts } from "./utils/constants";
import { setRegisters } from "./utils/functions"
import { openGUI } from "./utils/overlay"
import { data } from "./utils/data";
import { getLatestReleaseVersion } from "./utils/updater";


// --------------------------------- Welcome Message ---------------------------------

if (data.first_time) {
  data.first_time = false; 
  data.save();

  ChatLib.chat("");
  ChatLib.chat(`&r&7&m--------------&r${ consts.PREFIX }&r&7&m--------------`)
  ChatLib.chat(`&aUse '/pe' For settings!`)
  ChatLib.chat(`&aUse '/pe commands' For commands!`);
  new TextComponent(`&aClick &3here&a to copy the GitHub link!`)
    .setClickAction("run_command")
    .setClickValue(`/ct copy https://github.com/Perry5596/PerryClient`)
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
      ChatLib.chat(`${ consts.PREFIX } &bLatest Version: &e${ getLatestReleaseVersion() }`);
      ChatLib.chat(`${ consts.PREFIX } &bYou are currently on version &e${ version }`);
      break;
    case "commands":
      ChatLib.chat(`${ consts.PREFIX } &rWrite out commands here...`);
      break;
    case "reload":
      location.findWorld();
      ChatLib.chat(`${ consts.PREFIX } &aReloaded all registers!`);
      break;
    default:
      ChatLib.chat(`${consts.PREFIX} &r\n/pe => opens settings\n/pe gui => opens gui mover\n/pe version => gets the current PerryClient version\n/pe => see all commands\n/pe reload => reloads all registers in case they aren't working`)
  }
}).setCommandName(`pe`, true).setAliases("perry","perryclient","perryp_", "per").setTabCompletions("gui", "version", "commands", "reload", "help");

// --------------------------------- Extra Triggers ---------------------------------
// GUI Closed Trigger
register("guiClosed", (event) => {
  if (event?.toString()?.includes("vigilance")) {
    setRegisters()
  }
});

console.log("index.js is done loading!"); // Debug