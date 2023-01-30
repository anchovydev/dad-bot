// required discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
// token
const { token, userId } = require("./config.json");

// create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once("ready", () => {
	console.log("signed in");
});

client.on("messageCreate", message => {
   if (message.author.id == userId) return;

   // goofy ahh case sensitivity
   if (message.content.toLowerCase().includes("im") || message.content.toLowerCase().includes("i am") || message.content.toLowerCase().includes("i\'m")) {
      console.log(`message sent by ${message.author.username} in server \"${message.guild.name}\"\ncontent: \"${message.content}\"`);
         const newIndex = Math.max(message.content.toLowerCase().indexOf("i am") + 4, message.content.toLowerCase().indexOf("im") + 2, message.content.toLowerCase().indexOf("i\'m") + 3);
         const newMessage = message.content.slice(newIndex).trim();
         const channel = message.channel;
         if (!newMessage == "") {
            channel.send(`hi ${newMessage}, i'm dad-bot`);
         }
         console.log(newIndex);
   }
});

client.login(token);