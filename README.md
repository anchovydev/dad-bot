# dad-bot

a fun way to annoy everyone in your discord server

## what is dad-bot

dad-bot is a simple bot that utilizes [discord.js](https://discord.js.org/) to make dad jokes. whenever someone types a message that includes "im", "i'm", and "i am" in the server, dad-bot will respond. this leads to some results such as this:

![dad-bot responds to a message](/assets/dad-bot.png)

## how does dad-bot work?

whenever someone sends a message, dad-bot reads it and looks for substrings "im", "i'm", or "i am" and then finds the index of the last occurance of that. it adds 2, 3, or 4 (depending on the word) to the index and then splits the string at that index. the reason i chose last is because suppose we have the case "ha imagine im better". i think it makes more sense to reply "hi better, i'm dad-bot" than "hi agine im better, i'm dad-bot". it than returns this new string and removes all extra spaces. once it has that, it sends it. the bot can't reply to itself.

## how do i invite this bot?

click [here](https://discord.com/api/oauth2/authorize?client_id=1069386789736943656&permissions=2048&scope=bot).