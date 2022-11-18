// d.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// create a new instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// once bot is ready
client.once(Events.ClientReady, c => {
	console.log('Bot is up! Logged in as ${c.user.tag}');
});

client.login(token);
