const { EmbedBuilder, Client, GatewayIntentBits, ApplicationCommandOptionType } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

module.exports = {
    name: 'help',
    description: 'Permet de voir les commandes disponibles',
    // options: [
    //     {
    //         name: 'mention',
    //         description: 'L\'utilisateur dont vous souhaitez voir l\'avatar',
    //         required: true,
    //         type: ApplicationCommandOptionType.User,
    //     }
    // ],

    callback: (client, interaction) => {
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle("Liste des commandes disponibles")
                    .setDescription("Vous êtes actuellement dans la première page d'aide")
                    .setThumbnail("https://cdn.discordapp.com/attachments/1098694057095610511/1098694148854399006/LWR7PiF.png")
                    .setColor("DarkRed")
                    .addFields(
                    {
                            name: 'Avatar',
                            value: 'Permet d\'afficher l\'avatar de l\'utilisateur mentionné'
                        },
                        {
                            name: 'Ping (Commande désactivée)',
                            value: 'Renvoie Pong !'
                        })
            ]
        })
    }
}