var serverManager = require('./ServerManager.js');

module.exports = class BotCollection {
  constructor() {
    this.collection = [];
  }

  restartServer(session) {
    if (serverManager.isRunning()) {
      serverManager.stop();
      session.send('Restarting server');
    }
    serverManager.start();
    //
    let serverInstance = serverManager.getServer();
    for (let i = 0; i < this.collection.length; i++) {
      this.collection[i].build();
      serverInstance.post(this.collection[i].getApiEntry(), this.collection[i].getConnector().listen());
    }

  }

  add(name, image, plugins, session = null) {
    var classPath = `./bot-images/${image}`;
    var imageClass = require(classPath);
    var bot = new imageClass(name, plugins);

    if (session) {
      session.send('bot initialized');
    }
    bot.build();
    this.collection.push(bot);
    //
    if (session) {
      this.restartServer(session);
    }

  }

  remove(name) {
    var found = false;
    for (let i = 0; i < this.collection.length; i++) {
      let bot = this.collection[i];
      if (bot.getName() == name) {
        this.collection.splice(i, 1);
        found = true;
        break;
      }
    }
    this.restartServer();
    return found;
  }

  toString() {
    var result = '';
    result += 'Bot collection status:' + "\r\n";
    result += `Bots loaded: ${this.collection.length}\r\n`;
    for (let i = 0; i < this.collection.length; i++) {
      let bot = this.collection[i];
      result += bot.toString() + "\r\n";
    }
    return result;
  }
}