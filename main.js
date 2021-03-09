require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(`Bot Tag: ${client.user.tag}`);
    console.log(`Servers: ${client.guilds.cache.size}`);
    client.user.setActivity(`✅ Being the best bot in ${client.guilds.cache.size} server ✅`, {type : 5 });
});

client.on('message', async (message) => {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
    const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord, client);
    }else if (command === 'icao')  {
        client.commands.get('icao').execute(message, args, Discord, client);
    }else if (command === 'flightplan') {
        client.commands.get('flightplan').execute(message, args, Discord, client);
    }
})

client.login(process.env.BOT_TOKEN);