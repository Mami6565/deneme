const Discord = require('discord.js');

exports.run = async (client, message) => {

message.channel.send("**Kuralları Dm den Yolladım Lütfen Kurallara Uyalım!**")
message.author.send('**Kuralları Öğrenmek İçin Linke Tıkla** https://ghostbin.co/paste/pr6fz')
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "kurallar",
    description: "kurallar",
    usage: "kurallar"
  };