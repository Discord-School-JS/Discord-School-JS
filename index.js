// Variables & Constantes nécessaires pour le projet
const { Client, GatewayIntentBits, messageLink} = require("discord.js");
const config = require("./config.json");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

// Prefix
const PREFIX = config.prefix;

// On connecte le bot
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})
client.login(config.token);

client.on('messageCreate', message => {
    if(message.content === PREFIX + "ping") {
        message.reply("pong !");
    }
})
