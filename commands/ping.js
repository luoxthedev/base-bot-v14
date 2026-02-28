const { SlashCommandBuilder, PermissionsBitField, InteractionContextType } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Afficher le ping du bot.",
    aliases: [],
    permissions: [PermissionsBitField.Flags.ViewChannel],
    guildOwnerOnly: false,
    botOwnerOnly: false,
    async execute(client, message, args) {
        message.reply(`🏓 **Mon ping est de :** ${client.ws.ping} ms.`).catch(() => {});
    },
    async executeSlash(client, interaction) {
        const sent = await interaction.reply({ content: "🏓 Pong...", fetchReply: true });
        const latency = sent.createdTimestamp - interaction.createdTimestamp;
        interaction.editReply(`🏓 **Pong !**\n> 📡 Latence WebSocket : **${client.ws.ping} ms**\n> ⏱ Temps de réponse : **${latency} ms**`).catch(() => {});
    },
    get data() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
            .setContexts(InteractionContextType.BotDM, InteractionContextType.Guild, InteractionContextType.PrivateChannel)
    }
}