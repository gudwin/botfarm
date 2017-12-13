const config = require('config');
const enableDestroy = require('server-destroy');
const restify = require('restify');
//const https = require('restify-https');
const fs = require('fs');

class ServerManager {
    constructor() {
        this.server = null;
    }
    isRunning() {
        return this.server != null;
    }
    /**
     *
     * @returns {Server}
     */
    getServer() {
        return this.server;
    }
    start() {
        if ( this.server ) {
            throw new Error('Server already running');
        }
        try {
            this.server = restify.createServer({
                certificate: fs.readFileSync(config.get("http.https.certificate")),
                key: fs.readFileSync(config.get("http.https.key")),
                name: 'BotFarm'
            });
        } catch (e ) {
            console.log( e );
            return ;
        }


        enableDestroy(this.server.server);

        let self = this;
        this.server.listen(443, function () {
            console.log('%s listening to %s', self.server.name, self.server.url);
        });

        this.server.get('/', function (req, res, next) {
            res.send(200, 'Bot Farm welcomes you!');
            return next();
        });
        console.log('Server started');

    }
    stop() {

        this.server.close();
        this.server.server.destroy();

        this.server = null;
    }

}

module.exports = new ServerManager();