// required discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
// token
const { token } = require("./config.json");

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
      if (message.content.toLowerCase().includes("im") && !message.content.endsWith("im")) {
         const newMessage = message.content.slice(message.content.toLowerCase().indexOf("im") + 2).trim();
         const channel = message.channel;
         channel.send(`hi ${newMessage}, i'm dad-bot`);
      }
      else if (message.content.toLowerCase().includes("i am") && !message.content.endsWith("i am")) {
         const newMessage = message.content.slice(message.content.toLowerCase().indexOf("i am") + 4).trim();
         const channel = message.channel;
         channel.send(`hi ${newMessage}, i'm dad-bot`);
      }
      else if (message.content.toLowerCase().includes("i\'m") && !message.content.endsWith("i\'m")) {
         const newMessage = message.content.slice(message.content.toLowerCase().indexOf("i\'m") + 3).trim();
         const channel = message.channel;
         channel.send(`hi ${newMessage}, i'm dad-bot`);
      }
   }
});

client.login(token);