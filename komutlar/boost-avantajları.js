const Discord = require("discord.js");

exports.run = async (client, message, args) => {//enginar
  
  let embed = new Discord.MessageEmbed()
  .addField(':beginner: **BOOST AVANTAJLARI :beginner:**',`
  **\n Özel Rol :D**
  **\n İsmin Yanında Güzel Bir Emoji**
  **\n Emoji Ekleme Hakkı (Sunucu Sahibine Kalmış:D)**
  **\n Öncellikli Davranma**
  **\n Boost Basanlara Özel Çekiliş**
  **\n Boosterla Özel Sesli Oda.**
  **\n Çekiliş düzenleme hakkı**`)
  .setColor("RANDOM")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();
  
  message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "boost-avantajları",
  description: "",
  usage: ""
};