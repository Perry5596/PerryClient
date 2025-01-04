export function getUUID(name) {
    let uuid = null;
  
    try {
      // Build the URL
      const url = new java.net.URL(`https://playerdb.co/api/player/minecraft/${name}`);
      const connection = url.openConnection();
  
      // Set up connection properties
      connection.setRequestMethod("GET");
      connection.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");
      connection.setConnectTimeout(5000);
      connection.setReadTimeout(5000);
  
      // Read the response
      const reader = new java.io.BufferedReader(new java.io.InputStreamReader(connection.getInputStream()));
      const response = [];
      let line;
      while ((line = reader.readLine()) !== null) {
        response.push(line);
      }
      reader.close();
  
      // Parse the response
      const jsonResponse = JSON.parse(response.join(""));
      if (jsonResponse.code === "player.found") {
        uuid = jsonResponse.data.player.id;
      }
    } catch (err) {
      console.log(`Error fetching UUID: ${err}`);
    }
  
    return uuid;
  }
  
register("command", (name) => {
if (!name) {
    ChatLib.chat("Please provide a player name.");
    return;
}

const uuid = getUUID(name);
if (uuid) {
    ChatLib.chat(new TextComponent(uuid).setHover("show_text", `&eClick to copy UUID`).setClick("run_command", `/ct copy ${uuid}`));
} else {
    ChatLib.chat("&cCould not fetch UUID.");
}
}).setName("uuid");
