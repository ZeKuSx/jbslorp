const Discord = require('discord.js');


module.exports = {
    name: 'say',
    description: 'Says a message that someone want to send',
    async execute(args, message){
        const PREFIX = "zm.";
        let sayMessage = message.content.split(`${PREFIX}say `).join("")

        await message.delete();

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot use this command.");

            const embedsay = new Discord.MessageEmbed()
            .setDescription(sayMessage)
            .setColor('#304281')
            
            message.channel.send(embedsay);
            message.delete().catch();

    
    
        
            


    }

}
