module.exports = function(bot, botCollection) {
    bot.dialog('/remove', [
        function (session, args, next) {
            session.send(`Removing bot with name ${args.matched[1]}`);
            result = botCollection.remove( args.matched[1]);
            session.endDialog( result ? 'Bot disabled' : 'Bot not found');
        }
    ]);
};