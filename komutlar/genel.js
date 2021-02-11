const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Genel Komutlar`)
.setDescription(`**\`Genel Komutlar\`**

» \`${prefix}avatar\`: **Avatarınızı Atar**
» \`${prefix}banlist\`: **Sunucudan Banlananları Gösterir**
» \`${prefix}boost-avantajları\`: **Boost Avantajlarını Gösterir.**
» \`${prefix}say\`: **Üye Durum Grafiğini Gösterir**
» \`${prefix}kullanıcı-bilgi\`: **Etiketlediğin & Kendi Profilin Hakkında Bilgi Verir**
» \`${prefix}oylama\`: **Oylama Yapabilirsiniz.**` )


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
  name: "genel",
  description: 'genel',
  usage: 'genel'
};