ChatLib.chat("Commands.js is loading!"); // Debug
// --------------------------------- Imports ---------------------------------
import { comma } from "../utils/constants";
import location from "../utils/Location";
// --------------------------------- Commands ---------------------------------

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

ChatLib.chat("Commands.js is done loading!"); // Debug