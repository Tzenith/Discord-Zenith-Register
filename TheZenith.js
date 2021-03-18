const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\

client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
  const tag = '' //Tag
  const sunucu = '' //Sunucu
  const kanal = '' //Kanal
  const rol = '' //Rol
  try { 
  if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`${newUser} ${tag} Tagımızı Aldığı İçin Ona <@&${rol}> Rolünü Verdim `));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam ${newUser.username}, Sunucumuzda ${tag} Tagımızı Aldığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Sana Verdim\n\n**__Ailemize Hoşgeldin__**`, new Discord.MessageAttachment("navori.png")).catch(e => console.log("Özel Kapalı"))
  }
  if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(rol)) {
  await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`${newUser} ${tag} Tagımızı Çıkarttığı İçin Ondan <@&${rol}> Rolünü Aldım `));
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(rol);
  await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).send(`Selam **${newUser.username}**, Sunucumuzda ${tag} Tagımızı Çıkardığın İçin ${client.guilds.cache.get(sunucu).roles.cache.get(rol).name} Rolünü Senden Aldım\n\n**__Ailemizden Ayrıldın Tekrar Bekliyoruz__**`, new Discord.MessageAttachment("navori.png")).catch(e => console.log("Özeli Kapalı"))
  }
} catch (e) {
client.guilds.cache.get(sunucu).members.cache.get(ayarlar.sahip).send(`Oto Tag İsimli Komutta Hata\n\n${e}`)
 }
}
});


//



client.on("guildMemberAdd", async (member) => {
moment.locale("tr");
let kanal = client.channels.cache.get(``) //Kayıt Kanalı ID
await member.setNickname(`İsim | Yaş`) //yeni gelen kullanıcının adını değiştirme
await kanal.send(`>>>  ${member} Sunucumuza Hoş Geldin! \n\n Seninle Birlikte ${member.guild.memberCount} Kişiyiz\n\n Birazdan <@&> Rolündeki Yetkililer Sizi Kayıt Edecek Lütfen Bekleyin\n\n Hesabın Oluşturulma Tarihi: ${moment(member.user.createdAt).format("DD MMMM YYYY, dddd (hh:mm)")}\n\n **__${member.guild.name}__** `).catch(e => console.log(e))
}); 
 

//

client.on("guildMemberAdd", member => {
let botrol = '' //Bot otorol          //s1yahak4ep
let üyerol = ''//Kullanıcı otorol
  if (member.user.bot) {
  member.roles.add(botrol) 
 } else {
member.roles.add(üyerol) 
};
});


