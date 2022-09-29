
/* TLG Settings */
var send_tlg = 'Sua mensagem foi enviada com sucesso!',
    no_send_tlg = 'Falha ao enviar! Desculpe :(';

const chat_id = '-1001654733810', botID = 'bot5424266105:AAGkGDv9YqU-xD8Pmkn-uPcOmTSGThJlGW0';
const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;
document.querySelector('#messageForm').addEventListener("submit", async e => { // When the user submits the form
    e.preventDefault(); // Don't submit
    let text = JSON.stringify( // Convert the form data to a string to send as our Telegram message
        Object.fromEntries(new FormData(e.target).entries()), // Convert the form data to an object.
        null, 2); // Prettify the JSON so we can read the data easily
    const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
        method: 'POST',
        headers: { "Content-Type": "application/json" }, // This is required when sending a JSON body.
        body: JSON.stringify({ chat_id, text }), // The body must be a string, not an object
    });
});