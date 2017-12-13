const config = require('config');
const Promise = require('promise');

const botCollectionClass = require('./src/core/BotCollection');
const BotModel = require('./src/core/models/BotInstance');

var botCollection = new botCollectionClass();


process.on('uncaughtException', function (err) {
  console.log('Caught exception: ');
  console.log(err);
});


new Promise(function (resolve, reject) {
  BotModel.find().then(function (data) {
    botCollection.add('master', 'master', []);
    data.forEach(function (model) {
      try {
        botCollection.add(model.name, model.image, model.plugins);
      } catch (e) {
        console.log(e);
      }
    })
    resolve();
  });

}).then(function () {
  botCollection.restartServer();

})



