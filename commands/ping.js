module.exports = {
    name: "ping",
    description: "Test command",
    execute(message, args, Discord, client) {
        message.reply('Pong')
    }
}