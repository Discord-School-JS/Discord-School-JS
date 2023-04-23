const  { Client, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const { openticket } = require('../../../config.json');

module.exports = {
    name: 'ticket',
    description: 'Création du message de ticket',
    options: [
        {
            name: 'mention',
            description: 'L\'utilisateur dont vous souhaitez voir l\'avatar',
            required: false,
            type: ApplicationCommandOptionType.User,
        }
    ],

    callback: async (client, interaction) => {
        const message = await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle(`Ticket Tools`)
                    .setDescription('Open a ticket in the discord server.')
                    .setColor("DarkPurple")
            ],
            fetchReply: true
        });
        await message.react('😄');
    }
}