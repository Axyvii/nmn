// d.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');
const { Console } = require('node:console');

// create a new instance
const client = new Client({
	intents: [
	  GatewayIntentBits.DirectMessages,
	  GatewayIntentBits.Guilds,
	  GatewayIntentBits.GuildBans,
	  GatewayIntentBits.GuildMessages,
	  GatewayIntentBits.MessageContent,
	]
  });

// create a new collection of commands automatically used by this .js file finder used via the node filesystem
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const eventsPath = path.join(__dirname, 'events');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on("messageCreate", (message) => {
	if (/jacus|jacuś/i.test(message.content)) {
		if (message.author === client.user) {
			return;
		} else {
			var number = Math.floor(Math.random() * 6);
				if (number == 0) {
					message.reply('Ten serwer jest sponsorowany przez NordVPN. Zapewnienie bezpieczeństwa w Internecie jest coraz większym problemem i możesz zostać wykorzystany przez hakerów. NordVPN umożliwia zmianę adresu IP, co utrudnia śledzenie i zabezpiecza Twoją prywatność. Kliknij https://youtu.be/JhsRo2EdyQw, aby uzyskać 20% zniżki przez pierwsze dwa miesiące i podziękować NordVPN za sponsorowanie tego serwera');
				} else if (number == 1) {
					message.reply('HEJ, TO JA! JACEK!\n𝗡𝘂𝗺𝗯𝗲𝗿 𝟭 𝗥𝗮𝘁𝗲𝗱 𝗠𝗼𝗱𝗲𝗿𝗮𝘁𝗼𝗿 𝟮𝟬𝟭𝟮!');
				} else if (number == 2) {
					message.reply('A jak Pan Jezus powiedział?')
				} else if (number == 3) {
					message.reply('Można. Gdyby to było złe to Bóg by inaczej świat stworzył.')
				} else if (number == 4) {
					message.reply('Serio, mało rzeczy mnie triggeruje tak jak to chore „Xd”. Kombinacji x i d można używać na wiele wspaniałych sposobów. Coś cię śmieszy? Stawiasz „xD”. Coś się bardzo śmieszy? Śmiało: „XD”! Coś doprowadza Cię do płaczu ze śmiechu? „XDDD” i załatwione. Uśmiechniesz się pod nosem? „xd”. Po kłopocie. A co ma do tego ten bękart klawiaturowej ewolucji, potwór i zakała ludzkiej estetyki - „Xd”? Co to w ogóle ma wyrażać? Martwego człowieka z wywalonym jęzorem? Powiem Ci, co to znaczy. To znaczy, że masz w telefonie włączone zaczynanie zdań dużą literą, ale szkoda Ci klikać capsa na jedno „d” później. Korona z głowy spadnie? Nie sondze. „Xd” to symptom tego, że masz mnie, jako rozmówcę, gdzieś, bo Ci się nawet kliknąć nie chce, żeby mi wysłać poprawny emotikon. Szanujesz mnie? Używaj „xd”, „xD”, „XD”, do wyboru. Nie szanujesz mnie? Okaż to. Wystarczy, że wstawisz to zjebane „Xd” w choć jednej wiadomości. Nie pozdrawiam.');
				} else if (number == 5) {
					message.reply('Literalnie 1984. \n- George Orwell, 1984 ');
				}
			}
		}
	}
)

client.login(token);
