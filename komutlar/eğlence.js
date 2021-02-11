const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Eğlence Komutlarım`)
.setDescription(`**\`Eğlence\`**

» \`${prefix}nitro-ver\`: **Nitro Verir.**
» \`${prefix}renk-seç\`: **Rastgele Renk Seçer.**
» \`${prefix}sayı-seç\`: **Rastgele Sayı Seçer.**
» \`${prefix}piyango\`: **Şans İşi**
» \`${prefix}espiri\`: **Espiri Yapar.**
» \`${prefix}mc-skin\`: **İstediğiniz Skini Bulur.**
» \`${prefix}taksimdayı\`: **Taksim Dayı Gifi Atar.**
» \`${prefix}kaç-cm\`: **Bot malafat uzunluğunuzu söyler.**
» \`${prefix}kral-ol\`: **Kral Olursunuz.**
» \`${prefix}aduket-çek\`: **Aduket Çekersiniz.**
» \`${prefix}efkarım\`: **efkarlık Seviyenizi Ölçer.**
» \`${prefix}kartopu\`: **Kartopu Atarsınız.**
» \`${prefix}tokat-at\`: **Tokat Atar.**
» \`${prefix}zar-at\`: **Zar Atar.**
» \`${prefix}dizi-öner\`: **Güzel Bir Dizi Önerir**
» \`${prefix}deprem-bilgi\`: **Depreme Yakalanan Herkese Allah Sabir Versin Amin**` )


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
  name: "eğlence",
  description: 'eğlence',
  usage: 'eğlence'
};