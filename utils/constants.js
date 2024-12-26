export const version = (JSON.parse(FileLib.read("Perry", "metadata.json"))).version

export const consts = {
  PREFIX: "&f&l[&3Perry&6Client&f]",
  HEADER: "\n\n&f&r[&3Perry&6Client&7-v" + version + "&f]&3 by Perry5596\n\n",
  WIP: "&cThis feature is still in development!",
};

export const colors = {
  AQUA: "0x00ffff",
  YELLOW: "0xffff00",
  RED: "0xff0000"
}

export const EntityCreeper = Java.type("net.minecraft.entity.monster.EntityCreeper");
export const SMA = Java.type('net.minecraft.entity.SharedMonsterAttributes');

// Credit: NWJN Addons
export const comma = (num) => {
  if (num.toString()?.includes(".")) {
    const [intVal, floatVal] = num.toString()?.split(".")
    return intVal.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "." + floatVal
  }
  return num.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}