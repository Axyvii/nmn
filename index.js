// d.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { DISCORD_TOKEN } = require('./process.env');

// create a new instance
const client = new Client({ intents: [GatewayIntentBits.Guilts] });

// once bot is ready
client.once(Events.ClientReady, c => {
	console.log('Bot is up! Logged in as ${c.user.tag}');
});

client.login(DISCORD_TOKEN);
