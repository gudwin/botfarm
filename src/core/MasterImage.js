const config = require('config');
const builder = require('botbuilder');
var baseImage = require( '../bot-image');

module.exports = class master extends baseImage {
    constructor(name, plugins) {
        super(name, plugins);
    }

    initialize() {
        this.connector = new builder.ChatConnector({
            appId: config.get('bots.master.connector.app_id'),
            appPassword: config.get('bots.master.connector.app_password'),
        });

        var bot = new builder.UniversalBot(this.connector);

        var intents = new builder.IntentDialog();

        intents.matches(/^help/i, '/help');
        intents.matches(/^status/i, '/status');
        intents.matches(/^add ([^ ]+) ([^ ]+)[ ]?(.*)$/i, '/add');
        intents.matches(/^remove ([^ ]+)$/i, '/remove');
        intents.onDefault('/unknownCommand');

        bot.dialog('/', intents);

        const dialog = {
            welcome: require('./app/master-dialogs/welcome'),
            help: require('./app/master-dialogs/help'),
            status: require('./app/master-dialogs/status'),
            add: require('./app/master-dialogs/add'),
            remove: require('./app/master-dialogs/remove'),
            unknownCommand: require('./app/master-dialogs/unknownCommand')
        };


        dialog.welcome(bot);
        dialog.help(bot);
        dialog.status(bot);
        dialog.add(bot, botCollection);
        dialog.remove(bot, botCollection);
        dialog.unknownCommand(bot);
    }
}