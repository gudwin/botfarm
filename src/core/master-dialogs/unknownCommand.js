module.exports = function(bot) {
    bot.dialog('/unknownCommand', [
        function (session, args, next) {
            const lastVisit = session.userData.lastVisit;
            console.log( args );
            session.sendTyping();
            session.send('Unknown command');
            session.reset('/help');
        }
    ]);
};