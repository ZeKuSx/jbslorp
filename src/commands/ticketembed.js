const Discord = require('discord.js');

module.exports = {
    name: 'tickembed',
    description: 'embed for ticket',
    permissionError: ' You must be an admin to use this command.',
    permissions: 'ADMINISTRATOR',
    async execute(client, message, args,){

        const tickEmbed = new Discord.MessageEmbed()
        .setTitle(`Need help? Create a ticket.`)
        .setDescription(`
        If you need help/support, feel free to create a ticket
        \`zm.ticket           \`
        Support team will be with you shortly!`)
        .setColor("#304281");

        message.channel.send(tickEmbed);


    },
}