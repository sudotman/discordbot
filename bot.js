var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `s`
    if (message.substring(0, 1) == 't') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
				break;
				
			case 'man':
			 bot.sendMessage({
                    to: channelID,
                    message: 'subscibre'
                });
				break;
	
			default:
			 bot.sendMessage({
					to: channelID,
					message: 'Hi'
				});
				
            
            // Just add any case commands if you want to..
         }
     }
	 else if(message.substring(0,1) == 'F'){
		 bot.sendMessage({
                    to: channelID,
                    message: user + ' respect pay kar raha hai.'
                });
	 }
	 else if(message.substring(0,3) == 'lol'){
		 bot.sendMessage({
                    to: channelID,
                    message: user + ' has raha hai haha.'
                });
	 }
});