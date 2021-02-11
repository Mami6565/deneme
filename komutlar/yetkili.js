const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Yetkili Komutlarım`)
.setDescription(`**\`Yetkili\`**

» \`${prefix}rol-ver <user>\`: **Rol verir İstediğiniz Kişiye**
» \`${prefix}unban <user>\`: **Banı Kaldırır**
» \`${prefix}ban <user>\`: **Banlar**
» \`${prefix}prefix\`: **Sunucudaki Prefixi Değiştirir**
» \`${prefix}mute <user>\`: **Belirtilen Kullanıcıya Mute Atar**
» \`${prefix}sil <0-100>\`: **Belirtilen Miktarda Mesajı Siler**
» \`${prefix}sohbet-aç/kapat\`: **Sohbet Aç/Kapat**
» \`${prefix}slowmode\`: **slowmode ayarlarsınız.**
» \`${prefix}kilitle\`: **Belirli Sürede Kapatır Odayı.**
» \`${prefix}kurallar\`: **Hazır Kurallar Metni Atar**` )


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
  name: "yetkili",
  description: 'yetkili',
  usage: 'yetkili'
};