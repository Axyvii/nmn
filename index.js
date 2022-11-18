// d.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// create a new instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// once bot is ready
client.once(Events.ClientReady, () => {
	console.log('Bot is up!');
});

client.login(token);
