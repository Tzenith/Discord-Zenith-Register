const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`• | **${ayarlar.prefix}erkek İsim Yaş** : Etiketlediğiniz Erkek Üyeyi Sunucuda Kayıt Eder.\n • | **${ayarlar.prefix}kız İsim Yaş** : Etiketlediğiniz Kız Üyeyi Sunucuda Kayıt Eder. \n • | **${ayarlar.prefix}profil** : Kaç Kişiyi Kayıt Etmişşiniz Onu Gösterir. Eğer Birini Etiketlerseniz Onu Gösterir. \n • | **${ayarlar.prefix}temizle 100** : Komutu Kullandığınız Kanalda Belirttiğiniz Mesajı Siler.\n`)
        .addField(`» Linkler`, ` **|** [Destek Sunucusu](https://discord.gg/cb26Edskd2) **|** `)
        .setFooter(`The.Zenith | Varsayılan Prefix : ${ayarlar.prefix}`, client.user.avatarURL)
message.channel.send(embed).then(x => x.delete({timeout: 30000}))


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','help','h'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};
