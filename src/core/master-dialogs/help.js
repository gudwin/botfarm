module.exports = function(bot) {
    bot.dialog('/help', [
        function (session, args, next) {
            const lastVisit = session.userData.lastVisit;
            session.sendTyping();
            session.send('=======================================================');
            session.send(' BotFarm Help');
            session.send('=======================================================');
            session.send('* help - displays list of avaiable commands');
            session.send('* refresh modules - search for new modules that available from a local folder');
            session.send('* status - reports about current system status');
            session.send('* add bot_name bot_image [plugin1] ... [pluginN] - reports about current system status');
            session.send('* remove bot_name bot_image [plugin1] ... [pluginN] - reports about current system status');
            session.endDialog('How can I help you?');
        }
    ]);
};