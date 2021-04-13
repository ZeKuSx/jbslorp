const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'unmute',
    description: 'unmute',
    async execute(client, message, args){  
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot use this command.");
        const target = message.mentions.members.first();

        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.user.id);



            memberTarget.roles.remove(muteRole);

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason given";
        const unmuteEmbed = new Discord.MessageEmbed()
        .setTitle(`${target.user.username} has been unmuted`)
        .setDescription(`**Reason**: ${reason}
        **Staff Member**: ${message.member.user.username} `)
        .setColor("#304281")
        .setFooter(client.user.tag, client.user.displayAvatarURL());

            message.channel.send(unmuteEmbed)

        } else{
            message.channel.send(`**Cant find that user!** \`-zm.unmute person reason \``)
        }

    }
}

