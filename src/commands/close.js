const Discord = require('discord.js');

module.exports = {
    name: 'close',
    maxArgs: 0,
    async execute(client, message, args, cmd, discord){

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You dont have permission to use \`- zm.close \`");
        if(message.channel.parent.id === '824340172442173530')
        {


            message.channel.delete();

        }
        



    },
}