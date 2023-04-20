module.exports = {
    deleted: true, // Supprime la commande pour les utilisateurs
    name: 'ping', // Nom de la commande exécutée
    description: 'Pong!', // Réponse à la commande

    callback: (client, interaction) => {
        interaction.reply(`Pong ! ${client.ws.ping}ms`)
    }
};