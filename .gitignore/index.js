const Discord = require ("discord.js");

var bot = new Discord.Client ();

bot.on("ready", () => {
    bot.user.setGame("Manger");
    console.log("bot connected");
});

bot.login("NDEwODA1NjQ2NDI3MDI5NTE0.DV9j2Q._g19TglLG8fJyCnn_gYM004KiJo");

bot.on("message", message => {
    if (message.content === "modo")
        message.reply(" c'est mon chef");})
bot.on("message", message => {
    if (message.content === "salut")
        message.reply(" bonjour");})
        
        
        
        
        
        
