module.exports = class botImage {

    constructor ( name, plugins ) {
        this.name = name;
        this.plugins = plugins;
        this.resultBot = null;
        this.connector = null;
        //
        for ( let i = 0; i < this.plugins.length; i++) {
            var pluginClass = require(`./bot-plugins/${plugins[i]}`);
            var plugin = new pluginClass( this )
            this.plugins[ i ] = plugin;
        }
    }
    initialize() {
        var builder = require('botbuilder');
        this.connector =  new builder.ChatConnector({
            appId: process.env.MICROSOFT_APP_ID,
            appPassword: process.env.MICROSFT_APP_PASSWORD
        });

    }

    installPlugins( methodName ) {
        for ( let i = 0; i < this.plugins.length; i++ ) {
            if ( 'before' == methodName ) {
                this.plugins[i].before( );
            } else {
                this.plugins[i].after( );
            }
        }
    }
    build( ) {
        this.connector = null;
        this.resultBot = null;
        this.installPlugins('before');
        this.initialize();
        this.installPlugins('after');
        return this.resultBot;
    }
    getConnector( ) {
        return this.connector;
    }
    getName() {
        return this.name;
    }
    getApiEntry( ) {
        return `${this.name}/api/messages`;
    }
    toString() {
        var result = ` Bot: #${this.name}\r\n Base image: #${this.constructor.name}\r\n     Enabled plugins:\r\n`;
        for ( let i = 0; i < this.plugins.length; i++ ) {
            result += `     - ${this.plugins[i].constructor.name}`;
        }
        return result;
    }
}