"use strict";

function Bot( config ) {
    this.name = config.name || '';
    this.plugins = config.plugins || [];
    // This is an actual instance of the bot application handled by Microsoft Bot Framework
    this.bot = config.bot || null;
}
module.exports = BotInstance;

