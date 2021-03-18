//- Bu Kod Tamamen Bana Yani \ The.Zenith#9997' / Nickine Aittir Satış Yapılması Tamamen Yasaktır.! -\\
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {

let üye = message.mentions.users.first() || message.author
let toplam = db.fetch(`kayıttoplam_${üye.id}`)
let erkek = db.fetch(`kayıterkek_${üye.id}`)
let kız = db.fetch(`kayıtkız_${üye.id}`)
let sonkaydedilen = db.fetch(`sonkayıt_${üye.id}`)
let son = message.guild.members.cache.get(sonkaydedilen)
if(sonkaydedilen === null) son = "Bu kişi kimseyi kaydetmemiş."
if(toplam === null) toplam = 0
if(erkek === null) erkek = 0
if(kız === null) kız = 0
let thezenith = new Discord.MessageEmbed()
.setAuthor(`İşte ${üye.username} isimli kişinin kayıt etme bilgileri`)
.setThumbnail(üye.avatarURL())
//- Bu Kod Tamamen Bana Yani \ The.Zenith#9997' / Nickine Aittir Satış Yapılması Tamamen Yasaktır.! -\\
.setDescription(`
 Kaydedilen toplam üye sayısı : **${toplam}**

 Kaydedilen toplam erkek üye sayısı : **${erkek}**

Kaydedilen toplam kadın üye sayısı : **${kız}**

Son kaydedilen üye : ${son}
`)
.setFooter(message.author.username+` Tarafından İstendi`) 
.setTimestamp()
message.channel.send(thezenith)}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['profil'],
    permLevel: 0
}
exports.help = {
    name: 'profil',
    description: 'İsmini yazdığınız emoji hakkında bilgi verir',
    usage: 'profil'
}
//- Bu Kod Tamamen Bana Yani \ The.Zenith#9997' / Nickine Aittir Satış Yapılması Tamamen Yasaktır.! -\\