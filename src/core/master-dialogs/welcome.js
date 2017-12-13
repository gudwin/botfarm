module.exports = function(bot) {
    bot.dialog('/welcome', [
        function (session, args, next) {
            const lastVisit = session.userData.lastVisit;
            session.sendTyping();
            session.send('=======================================================');
            session.send([' Hello, Master!', ' Hi there, Master!', ' Aloha, Master!']);
            session.send(' Welcome to BotFarm v0.1.0');
            session.send('=======================================================');
            session.send('How can I help you?');
            session.endDialog('Type `help` for additional information');


        }
    ]);
};