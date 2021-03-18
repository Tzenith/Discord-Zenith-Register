//- Bu Kod Tamamen Bana Yani \ The.Zenith#9997' / Nickine Aittir Satış Yapılması Tamamen Yasaktır.! -\\
const Discord = require("discord.js");
exports.run = function(client, message, args) {
if (!message.member.roles.cache.has('ROL İD')) return message.channel.send("Bu işlemi sadece Ayarlanmış Yetkililer gerçekleştirebilir.")//Sohbetinizi Kimler Silecekse Onun Rol ID'sini Girin {örnek : @Public Room Sorumlusu / 818763466709925899}

if (!args[0]) {
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription(`Lütfen silinecek mesaj sayısını belirtiniz.`)
.setFooter(`Komutu Kullanan Kişi : ${message.author.username}`, message.author.avatarURL)
message.channel.send(embed);
return;
}
if (args[0] > 100) {
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription(`Ne yazık ki 100'den fazla mesaj silemem.`)
.setFooter(`Komutu Kullanan Kişi : ${message.author.username}`, message.author.avatarURL)
message.channel.send(embed);
return;
}
message.channel.bulkDelete(args[0]).then(() => {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setTitle("The.Zenith Temizlik Code")
.setURL('https://discord.gg/cb26Edskd2')
.setThumbnail("https://cdn.discordapp.com/attachments/811154186107486249/812366306514436106/GIF-210219_194343.gif")
.addField(`Sohbeti Temizleyen Yetkili`, `<@${message.author.id}>`)
.addField(`Sohbette Silinen Mesaj Sayısı`, args[0])
.setFooter(`Komutu Kullanan Kişi : ${message.author.username}`, message.author.avatarURL)
message.channel.send(embed).then(x => x.delete({timeout: 5000}))
});
};
//- Bu Kod Tamamen Bana Yani \ The.Zenith#9997' / Nickine Aittir Satış Yapılması Tamamen Yasaktır.! -\\
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sil"],
  permLevel: 0
};

exports.help = {
  name: "temizle",
  description: "temizle",
  usage: "temizle"
};
//- Bu Kod Tamamen Bana Yani \ The.Zenith#9997' / Nickine Aittir Satış Yapılması Tamamen Yasaktır.! -\\