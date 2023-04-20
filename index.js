// Variables & Constantes nécessaires pour le projet
const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config.json");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

// Prefix
const PREFIX = config.prefix;

// On connecte le bot
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})
client.login(config.token);

// Exécution des modules :
const monduleTest = require('./commands/test');

monduleTest.logConsole;
monduleTest.logConsole2;