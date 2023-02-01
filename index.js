// required discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
// token
const { token, userId } = require("./config.json");

// create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once("ready", () => {
   client.user.setActivity("getting the milk");
});

client.on("messageCreate", message => {
   if (message.author.id == userId) return;

   // goofy ahh case sensitivity
   if (message.content.toLowerCase().indexOf("im") !== -1 || message.content.toLowerCase().indexOf("i am") !== -1 || message.content.toLowerCase().indexOf("i\'m") !== -1) {
      var newIndex = Math.max(message.content.toLowerCase().indexOf("i am") + 4, message.content.toLowerCase().indexOf("im") + 2, message.content.toLowerCase().indexOf("i\'m") + 3);
      if (newIndex == 3 && message.content.toLowerCase().startsWith("im")) {
         newIndex = 2;
      }
         if (!message.content.slice(newIndex).trim() == "") {
            message.channel.send(`hi ${message.content.slice(newIndex).trim()}, i'm dad-bot`);
         }
   }
});

client.login(token);