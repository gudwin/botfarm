module.exports = function(bot ) {
    bot.dialog('/status', [
        function (session, args, next) {
            session.sendTyping();
            session.send('=======================================================');
            session.send(' System Status Report');
            session.send('=======================================================');
            session.send( botCollection.toString());
            session.endDialog('End of status report');
        }
    ]);
};