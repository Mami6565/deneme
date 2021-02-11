const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**» \`${prefix}genel\`:genel komutları görürsünüz.**
**» \`${prefix}kayıt\`: kayıt komutlarını görürsünüz + Otorol**
**» \`${prefix}eğlence\`: eğlenirsiniz .d**
**» \`${prefix}yetkili\`: Yetkili Komutları Görürsünüz**
**» \`${prefix}hakkımda\`: Hakkımdaki Bilgileri Öğrenirsiniz**
**» \`${prefix}logo\`: Logo Yapabilirsiniz.**
**» \`${prefix}gif\`: Gif Bulurabilirsiniz**
**» \`${prefix}koruma\`: Sunucu Koruma Küfür Aç Vb.**`)



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
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};