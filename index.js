// required discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");

const { token, userId, anchovyId } = require("./config.json");

// banned words, i'm really sad that this is even neccessary
const bannedWords = ["fagg", "nigg", "chink", "fuck", "shit", "kys"];

// create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once("ready", () => {
   client.user.setActivity("getting the milk");
});

client.on("messageCreate", message => {
   if (message.author.id == userId) return;

   // prevent pingspams
   if (message.content.indexOf("@") !== -1) return;

   // goofy ahh case sensitivity
   if (message.content.toLowerCase().indexOf("im") !== -1 || message.content.toLowerCase().indexOf("i am") !== -1 || message.content.toLowerCase().indexOf("i\'m") !== -1 || message.content.toLowerCase().indexOf("iam") !== -1) {
      var newIndex = Math.max(message.content.toLowerCase().indexOf("i am") + 4, message.content.toLowerCase().indexOf("im") + 2, message.content.toLowerCase().indexOf("i\'m") + 3, message.content.toLowerCase().indexOf("iam") + 3);
      if (newIndex == 3 && message.content.toLowerCase().startsWith("im")) {
         newIndex = 2;
      }
      if (message.guild.members.me.permissions.has("SendMessages") && message.author.id != anchovyId && !(bannedWords.some(v => message.content.toLowerCase().includes(v)))) {
         if (!message.content.slice(newIndex).trim() == "" && message.content.slice(newIndex).trim().length < 2000) {
            message.channel.send(`hi ${message.content.slice(newIndex).trim()}, i'm dad-bot`);
         }
      } else {
         return;
      }
   }
});

client.login(token);