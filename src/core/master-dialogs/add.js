module.exports = function(bot,botCollection) {
    bot.dialog('/add', [
        function (session, args, next) {
            var name = args.matched[1];
            var imageName = args.matched[2];
            var plugins = [];
            if ( args.matched[3]) {
                plugins = args.matched[3].split(' ');
            }

            var bot = botCollection.add( name, imageName, plugins, session);
            session.endDialog('Bot added');


        }
    ]);
};