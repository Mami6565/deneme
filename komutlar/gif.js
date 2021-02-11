const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Gif Komutlarım`)
.setDescription(`**\`Gif\`**

» \`${prefix}couple\`: **Sevgili Gif i Atar**
» \`${prefix}women\`: **Kadın Gif i Atar**
» \`${prefix}man\`: **Adam Gif i Atar**
» \`${prefix}baby\`: **Bebek Gif i Atar**`)



.setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "gif",
  description: 'gif',
  usage: 'gif'
};