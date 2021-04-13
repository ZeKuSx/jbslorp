require('dotenv').config();
const fs = require('fs').promises;
const path = require("path");
const  Discord  = require('discord.js')
const { error } = require('console');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const PREFIX = "jb.";


(async () => {
    const cmdDir = path.join(__dirname, "commands");
    const commandFiles = await fs.readdir(cmdDir);

    for(const file of commandFiles){
        const command = require(path.join(cmdDir, file));
        client.commands.set(command.name, command);
    }



    client.login(process.env.BOT_TOKEN);
})()




client.on('ready', () =>{ 
    console.log('JBSloRP bot is now online!');
    client.user.setActivity('JBSloRP server comming soon', {type: 'PLAYING'}).catch(console.error)});







    

    client.on('message', async message =>{
        if (message.author.bot) return;
        if (!message.content.startsWith(PREFIX)) return;
        
        const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
        const cmd = args.shift();
        const cmdDir = path.join(__dirname, "commands");
        const commandFiles = await fs.readdir(cmdDir);

        for(const file of commandFiles){
            const command = require(path.join(cmdDir, file));
            client.commands.set(command.name, command);
        }
        if (!client.commands.has(cmd)) return;

        try{
            client.commands.get(cmd).execute(client, message, args);
        } catch (error){
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    })







  

 //verify 
client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.id === '831517304331173888')


            await message.delete();

    if(message.content.toLowerCase() === 'jb.verify' && message.channel.id === '831517304331173888')
    {
        await message.delete().catch(err => console.log(err));
        const role = message.guild.roles.cache.get('831409857709080576');
        if(role) {
            console.log('before adding role')
            try{
            await message.member.roles.add(role);

            console.log("Role added!");
            }
            catch(err){
                console.log(err);
            }
        }
    }
});





//ban

 





client.on('guildMemberAdd', member => {
    console.log(member.user.tag);
});