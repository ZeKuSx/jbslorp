const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban',
    async execute(client, message){
        const {member, mentions} = message

        await message.delete();

        const tag = `<@${member.id}>`
    
        if(member.hasPermission('ADMINISTRATOR')||
        member.hasPermission('BAN_MEMBERS')
         ){
          const target = mentions.users.first()
          if(target){
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.ban()
            message.channel.send(`${tag} That user has been banned.`)
          }else {
              message.channel.send(`<@${member.id}> **You need to mention a member \`- zm.ban @user reason\`**`)
          }
              
         } else {
             message.channel.send(`**<@${member.id}> You do not have permission to use this command.**`) 
         }
    }
}