const { EmbedBuilder, version } = require('discord.js');
const os = require('os');
const cpuStat = require("cpu-stat");

module.exports = {
    name: 'botinfo',
    description: 'Permet de voir les informations du bot',

    callback: (client, interaction) => {
        cpuStat.usagePercent(function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }

            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`Informations de ${client.user.username}`)
                        .setColor('DarkPurple')
                        .setFields({
                                name: 'Créateur du bot : ',
                                value: '<@292800104333836309>'
                            },
                            {
                                name: 'En ligne de puis :',
                                value: 'dd'
                            },
                            {
                                name: 'Discord.js Version : ',
                                value: `v${version}`
                            },
                            {
                                name: 'CPU : ',
                                value: `${os.cpus().map(i => i.model)[0]}`
                            },
                            {
                                name: 'Utilisation du CPU',
                                value: `${percent.toFixed(2)}%`
                            },
                            {
                                name: 'tt',
                                value: 'tt'
                            }
                        )
                    // .setURL(`${avatarmention.displayAvatarURL({ size: 1024 })}`)
                    // // .setDescription(`Avatar de [${avatarmention.username}](${avatarmention.displayAvatarURL({ size: 1024 })})`)
                    // .setImage(`${avatarmention.displayAvatarURL({ size: 1024 })}`)
                    // // .setColor("18d67e")
                    // .setColor("DarkPurple")
                ]
            })
        })
    }
}