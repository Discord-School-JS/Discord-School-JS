const { EmbedBuilder, Client, GatewayIntentBits, ApplicationCommandOptionType } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

module.exports = {
    name: 'avatar',
    description: 'Permet de voir l\'avatar de l\'utilisateur.',
    options: [
        {
            name: 'mention',
            description: 'L\'utilisateur dont vous souhaitez voir l\'avatar',
            required: true,
            type: ApplicationCommandOptionType.User,
        }
    ],

    callback: (client, interaction) => {
        let user = interaction.options.getUser('user') || interaction.member;
        let avatarmention = interaction.options.getUser('mention');

        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle(`Avatar de ${avatarmention.username}`)
                    .setURL(`${avatarmention.displayAvatarURL({ size: 1024 })}`)
                    // .setDescription(`Avatar de [${avatarmention.username}](${avatarmention.displayAvatarURL({ size: 1024 })})`)
                    .setImage(`${avatarmention.displayAvatarURL({ size: 1024 })}`)
                    // .setColor("18d67e")
                    .setColor("DarkPurple")
            ]
        })
    }
}