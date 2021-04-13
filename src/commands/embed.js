const Discord = require('discord.js');

module.exports = {
    name: 'verifyembed',
    description: 'embed for ticket',
    permissionError: ' You must be an admin to use this command.',
    permissions: 'ADMINISTRATOR',
    async execute(client, message, args,){

        const verifyEmbed = new Discord.MessageEmbed()
        .setTitle(`Pravila Discord Serverja`)
        .setDescription(` Brez sexizma
      Brez rasizma
      Brez žaljenja drugih
      Brez žaljenja družin drugih
      Brez kreganja v chat-u
      Brez spammanja v chat-u
      Brez spammanja drugim v zs
      Brez žaljenja drugih v zs
      Upoštevajte STAFF
      Preberite si pravila preden greste igrati
      V primeru kršenja pravil sledijo kazni/sankcije`)
        .setFooter(`napišite jb.verify da dobite 'civilist' role `)
        .setColor("#304281");

        message.channel.send(verifyEmbed);


    },
}