const logger = require("../utils/logger");

module.exports = {
    name: "interactionCreate",
    async execute(client, interaction) {
        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;

            // vérification des permissions
            if (command.botOwnerOnly) {
                if (!client.config.owners.includes(interaction.user.id)) return interaction.reply({
                    content: `❌ **Vous devez être le propriétaire du bot pour exécuter cette commande.**`,
                    flags: ["Ephemeral"]
                });
            };

            if (command.guildOwnerOnly) {
                if (interaction.member.guild.ownerId != interaction.user.id && !client.config.owners.includes(interaction.user.id)) return interaction.reply({
                    content: `❌ **Vous devez être le propriétaire du serveur pour exécuter cette commande.**`,
                    flags: ["Ephemeral"]
                });
            };

            if (command.permissions?.length) {
                const authorPerms = interaction.channel.permissionsFor(interaction.user) || interaction.member.permissions;
                if (!authorPerms.has(command.permissions) && !client.config.owners.includes(interaction.user.id)) return interaction.reply({
                    content: `❌ **Vous n'avez pas les permissions nécessaires pour exécuter cette commande.**`,
                    flags: ["Ephemeral"]
                });
            };

            try {
                await command.executeSlash(client, interaction);
                logger.info(`[CMD-S] ${interaction.guild ? `${interaction.guild.name} | ${interaction.channel.name}` : "DM"} | ${interaction.user.tag} | ${command.name}`);
            } catch (error) {
                logger.error(`Erreur lors de l'exécution de la commande slash "${command.name}"`, error);
            };
        };
    }
}