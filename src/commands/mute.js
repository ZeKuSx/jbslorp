const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'mute',
    async execute(client, message, args){  

        await message.delete();
        
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot use this command.");
        const target = message.mentions.members.first();

        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.user.id);
//
            if(!args[1]){
            memberTarget.roles.add(muteRole);

        let reason = args.slice(2).join(" ");
        if (!reason) reason = "No reason given";
        const muteEmbed = new Discord.MessageEmbed()
        .setTitle(`${target.user.username} has been muted`)
        .setDescription(`**Reason**: ${reason}
        **Staff Member**: *${message.member.user.username}* `)
        .setColor("#304281")
        .setFooter(client.user.tag, client.user.displayAvatarURL());

            message.channel.send(muteEmbed)
            return
            }
//
            memberTarget.roles.add(muteRole);

            let reason = args.slice(2).join(" ");
            if (!reason) reason = "No reason given";
            const tempmuteEmbed = new Discord.MessageEmbed()
            .setTitle(`${target.user.username} has been muted for ${args[1]}`)
            .setDescription(`**Reason**: ${reason}
            **Time**: ${args[1]}
            **Staff Member**: *${message.member.user.username}* `)
            .setColor("#304281")
            .setFooter(client.user.tag, client.user.displayAvatarURL());
    
           message.channel.send(tempmuteEmbed)
//
            setTimeout(function(){
            memberTarget.roles.remove(muteRole);


                }, ms(args[1]));


        } else{
            message.channel.send(`**Cant find that user!** \`-zm.mute person reason \``)
        }
        console.log(ms(args[1]));


        
    }
}

