'use strict';
const app = require('../../app.js'),
      port = 3000,
      host = 'http://localhost';

var runningServer;

module.exports = {
  url: host + ':' + port,
  start: function() {
    return new Promise((resolve, reject) => {
      return app
        .then(() => {
          runningServer = app.listen(port, function(){
            console.log('test server running on: ' + port);
            resolve();
          });
        })
        .catch(() => {
          console.log('Error setting up the server', err);
          reject();
        });
    });
  },
  stop: function() {
    runningServer.close();
  }
}
