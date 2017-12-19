"use strict";

function BotApplication(data) {
  this.name = data.name || '';
  this.theme = data.theme || '';
  this.plugins = data.plugins || [];
  this.config = data.config || {};
  this.apiEntryPoint = data.apiEntryPoint || '';
  // This is an actual instance of the bot application handled by Microsoft Bot Framework
  this.bot = data.bot || null;
}

BotApplication.prototype.getBot = function () {
  return this.bot;
}
BotApplication.prototype.getName = function () {
  return this.name;
}
BotApplication.prototype.getApiEntryPoint = function () {
  return this.apiEntryPoint;
}
BotApplication.prototype.toString = function () {
  let result = ` Bot: #${this.name}\r\n API Entry Point: ${this.apiEntryPoint}\r\nBase image: #${this.theme.getName()}\r\n     Enabled plugins:\r\n`;
  for (let i = 0; i < this.plugins.length; i++) {
    result += `     - ${this.plugins[i].getName()}`;
  }
  return result;
}
module.exports = BotApplication;

