var mongoose = require('../../Infrastructure/MongoClient');
var Schema = mongoose.Schema;
var BotSchema = new Schema({
    name: String,
    createdDate: Number,
    image: String,
    plugins: Array
});

module.exports = mongoose.model('bots', BotSchema);

