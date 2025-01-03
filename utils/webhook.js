import settings from "../config";

const webhookURL = settings.webhookURL;
/**
 * Sends a Discord webhook with the provided title, message, and time.
 * @param {string} title - The title of the webhook message.
 * @param {string} message - The main content of the webhook message.
 */
export function sendWebhook(title, message) {
    const url = new java.net.URL(webhookURL);
    const connection = url.openConnection();

    // Configure the connection for POST
    connection.setRequestMethod("POST");
    connection.setDoOutput(true);
    connection.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
    connection.setRequestProperty("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");

    // Create the payload
    const payload = JSON.stringify({
        username: "Perry - PerryClient",
        avatar_url: "https://raw.githubusercontent.com/Perry5596/PerryClient/main/assets/PerryClient-discord-logo.png",
        embeds: [
            {
                title: title,
                description: message,
                color: 3447003, // Example color
            }
        ]
    });

    try {
        // Write the payload to the request body
        const outputStream = connection.getOutputStream();
        const writer = new java.io.OutputStreamWriter(outputStream, "UTF-8");
        writer.write(payload);
        writer.close();

        // Send the request and check the response
        const responseCode = connection.getResponseCode();
        if (responseCode === 200 || responseCode === 204) {
            console.log("Webhook sent successfully!");
        } else {
            const errorStream = new java.io.InputStreamReader(connection.getErrorStream(), "UTF-8");
            const errorResponse = new java.io.BufferedReader(errorStream).lines().toArray().join("\n");
            ChatLib.chat(`§cFailed to send webhook. Response code: ${responseCode}`); // Red failure message
            ChatLib.chat(`§cError response: ${errorResponse}`);
        }
    } catch (error) {
        ChatLib.chat(`§cError sending webhook: ${error}`); // Red error message
    }
}
