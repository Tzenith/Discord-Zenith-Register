//- Bu Kod Tamamen Bana Yani \ The.Zenith#9997' / Nickine Aittir Satış Yapılması Tamamen Yasaktır.! -\\

const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
const kayıtlı = message.guild.roles.cache.find(r => r.id === "ROL İD"); //Buraya Verilecek Erkek Rolünü Girin.
const misafir = message.guild.roles.cache.find(r => r.id === "ROL İD"); //buraya Sunucunuza Girecek Unregister Rolünü Girin.
const log = message.guild.channels.cache.find(c => c.id === "KANAL İD"); //Buraya Register Chat Kanalınızı Yazın.
const chatlog = message.guild.channels.cache.find(c => c.id === "KANAL İD"); //Buraya Kayıt Olduktan Sonra Chate Gidecek Hoşgeldin Mesajı Kanalını girin..
const tag = "TAGINIZ";//Tagınız Varsa Tagınızı Girin Herşey Optimize Edilmiştir.
if (!message.member.roles.cache.has('ROL İD')) return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.")//İnsanları Kim Kayıt Edecekse Onun Rol İd'sini Girin.
let üye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!üye) return message.channel.send("Kimi Kayıt Edeceğim ?")
const c = message.guild.member(üye)
const nick = args[1];
const yas = args[2];
if(!nick) return message.channel.send("Kayıt Edeceğim Kişinin İsmi Nedir ?")
if(!yas) return message.channel.send("Kayıt Edeceğim Kişinin Yaşı Kaçtır ?")
c.roles.add(kayıtlı)
.then(async msg => {
setTimeout(() => {
c.roles.remove(misafir)
}, 3000);//buralara ellemeyin bot pinge girmesin diye ayarlanmıştır
})
.then(async msg => {
setTimeout(() => {
c.setNickname(`${tag} ${nick} | ${yas}`)
}, 6000);//buralara ellemeyin bot pinge girmesin diye ayarlanmıştır
})
c.roles.remove(misafir)
c.setNickname(`${tag} ${nick} | ${yas}`)
db.add(`kayıtkız_${message.author.id}`, 1)
db.add(`kayıttoplam_${message.author.id}`, 1)
db.set(`sonkayıt_${message.author.id}`, üye.id)
//- Bu Kod Tamamen Bana Yani \ The.Zenith#9997' / Nickine Aittir Satış Yapılması Tamamen Yasaktır.! -\\
const embed = new Discord.MessageEmbed()    
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`  \`Kayıt Edilen Kullanıcı\` : ${üye} \n \`Kayıt Eden Yetkili\` : ${message.author} \n  \`Kayıt İşleminde Verilen Rol\` : <@&${kayıtlı}> \n  \`Kayıt İşleminde Alınan Rol\` : <@&${misafir}> \n  \`Kayıt Edilen Yeni İsim\` : **${tag} ${nick} | ${yas}**`)
.setThumbnail("https://media0.giphy.com/media/Z9WQLSrsQKH3uBbiXq/giphy.gif")
.setImage("https://pazarlamasyon.com/wp-content/uploads/2016/03/cheering_minions.gif")
.setFooter("The.Zenith#9997 Registration")
.setColor("BLACK")
return message.channel.send(embed)
chatlog.send(`${uye} Sunucumuz'a Giriş Yaptı Ona Hoş Geldin Diyebilirsiniz.`)
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kadın", "k"],
  permLevel: 0
};

exports.help = {
  name: "kız",
  description: "",
  usage: ""
};
//- Bu Kod Tamamen Bana Yani \ The.Zenith#9997' / Nickine Aittir Satış Yapılması Tamamen Yasaktır.! -\\ 
