const Discord = require('discord.js');

module.exports = {
    name: 'ticket',
    aliases: [],
    description: 'opens a ticket',
    async execute(client, message, args, cmd, discord){

        await message.delete();

        if(message.channel.id === '824340218161266779')
        {

        let modRole = message.guild.roles.cache.find(role => role.id === '827405557437825064');
        let tsupRole = message.guild.roles.cache.find(role => role.id === '827409454433566751');

        const channel = await message.guild.channels.create(`ticket-${message.author.tag}`, {
            type: 'text',
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: message.member.id,
                    allow: ['VIEW_CHANNEL','SEND_MESSAGES']
                },
                {
                    id: modRole.id,
                    allow: ['VIEW_CHANNEL','SEND_MESSAGES']
                },
                {
                    id: tsupRole.id,
                    allow: ['VIEW_CHANNEL','SEND_MESSAGES']
                },
            ]
        });
        channel.setParent('824340172442173530', { lockPermissions: false });


        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given";
        const t2Embed = new Discord.MessageEmbed()
        .setTitle(`Thank you for creating a ticket ${message.author.tag}`)
        .setDescription(`
        Support will be with you shortly.
        To close a ticket at any time, type zm.close (Only Staff) 
        Reason for ticket - ${reason}
        Please elaborate on what you need, while you wait for support to arrive.`)
        .setColor("#304281");
        

        const reactionMessage = await channel.send(t2Embed)

    } else 

    return;

       
            
        
    },
};