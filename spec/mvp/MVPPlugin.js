"use strict";

function MVPPlugin() {

}
MVPPlugin.prototype.getName = function () {
  return 'MVPPlugin';
};
MVPPlugin.prototype.build = function (settings, botApplication) {
  botApplication.getBot().dialog('/plugin-dialog', [
    (session) => {
      session.endConversation('Hello World!')
    }
  ]);
}

module.exports = MVPPlugin;
