export const version = (JSON.parse(FileLib.read("Perry", "metadata.json"))).version

export const consts = {
  PREFIX: "&f&l[&3Perry&6Client&f]",
  WIP: "&cThis feature is still in development!",
};

// Credit: NWJN Addons
export const comma = (num) => {
  if (num.toString()?.includes(".")) {
    const [intVal, floatVal] = num.toString()?.split(".")
    return intVal.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "." + floatVal
  }
  return num.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}