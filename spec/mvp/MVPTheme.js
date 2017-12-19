'use strict';

const BotApplication = require('../../src/core/models/BotApplication');
const BaseTheme = require('../../src/core/models/BaseTheme');
const builder = require('botbuilder');

function MVPTheme() {
  BaseTheme.call(this);
}

MVPTheme.prototype.getName = function () {
  return 'MVPTheme';
}
MVPTheme.prototype.build = function (settings) {
  let connector = new builder.ConsoleConnector();
  let bot = new builder.UniversalBot(connector);
  bot.dialog('/', function (session) {
    session.send('hi!');
    session.beginDialog('/plugin-dialog')
  });
  let data = {
    name: settings.name,
    apiEntryPoint: settings.apiEntryPoint,
    bot : bot
  }
  let result = new BotApplication(data);
  return result;
};


module.exports = MVPTheme;