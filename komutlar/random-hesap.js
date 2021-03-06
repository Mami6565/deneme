const Discord = require('discord.js');
const qdb = require('quick.db');
let prefix = "m!"
exports.run = async(client, message, args) => {
if(!args[0]) return message.reply('Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız **m!hg-bb yardım**')
if(args[0] === "ayarla" || args[0] === "aç") {
if(!args[1]) return message.reply('Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız **m!hg-bb yardım**')
if(args[1] === "kanal") {
var kanal = message.mentions.channels.first();
if(!kanal) return message.reply('Bir kanal belirtiniz!')
qdb.set(`hgbbkanali_${message.guild.id}`, kanal.id)
return message.reply('Giriş kanalı başarıyla ayarlandı!')}
if(args[1] === "rol") {
var teyitci = message.mentions.roles.first();
if(!teyitci) return message.reply('Bir rol belirtiniz!')
qdb.set(`teyitci_${message.guild.id}`, teyitci.id)
return message.reply('Kayıt Görevlisi rolü başarıyla ayarlandı!')}
if(args[1] === "tag"){
var tag = args.slice(2).join(' ')
if(!tag) return message.reply("Tag'ınızı belirtin")
qdb.set(`tag_${message.guild.id}`, tag)
return message.reply('Tag başarıyla ayarlandı!')}}
if(args[0] === "kapat" || args[0] === "sıfırla"){
if(!args[1]) return message.reply('Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız **m!hg-bb yardım**')
if(args[1] === "kanal") {
qdb.delete(`hgbbkanali_${message.guild.id}`)
return message.reply('Giriş kanalı veritabanı sıfırlandı!')}
if(args[1] === "rol"){
qdb.delete(`teyitci_${message.guild.id}`)
return message.reply('Kayıt Görevlisi rolü başarıyla sıfırlandı!')}
if(args[1] === "tag"){
qdb.delete(`tag_${message.guild.id}`)
return message.reply('Tag veritabanı başarıyla sıfırlandı')}} 
if(args[0] === "yardım" || args[0] === "help"){
const embedimsi = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle(`${client.user.username} Public Giriş-Çıkış Komutları`)
.addField(`m!yardım`,'Yardım Menüsü')
.addField(`m!ayarla kanal #kanal`,'Giriş çıkış kanalını ayarlar.')
.addField(`m!ayarla rol @rol`,'Kayıt sorumlusu rolünü ayarlar.')
.addField(`m!ayarla tag <tagınız>`,"Tag'ı ayarlar.")
.addField(`m!sıfırla kanal`,'Giriş çıkış kanalını sıfırlar.')
.addField(`m!sıfırla rol`,'Kayıt sorumlusu rolünü sıfırlar.')
.addField(`m!sıfırla tag`,"Tag'ı sıfırlar")
.setFooter(message.author.username + ' kullandı!')
message.channel.send(embedimsi)}}
exports.conf = {aliases: [], permLevel: 0}
exports.help = {name: "hg-bb", description: "", usage: "prefix+hg-bb"}