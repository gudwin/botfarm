const baseImage = require('../bot-image');
const builder = require('botbuilder');

function BaseSkypeTheme( name, plugins ) {
  baseImage.call(this,name, plugins);
}

BaseSkypeTheme.prototype.build = function () {
  baseImage.prototype.build.call(this);
  this.resultBot.dialog('/', function ( session ) {
    session.endDialog('Hello world!');
  })
}
BaseSkypeTheme.prototype.toString = function () {
  return `Bot #${this.name}`;
}
module.exports = hello;