const Discord = require('discord.js');

exports.run = async (client, message) => {

message.channel.send("**Aga Dm den Yolladım H.o :D**")
message.author.send("https://cdn.discordapp.com/attachments/805431248989192202/805779693818347560/unknown-3-1.png")

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "nitro-ver",
    description: "nitro verir :D",
    usage: "nitro-ver"
  };