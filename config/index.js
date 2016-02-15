var nconf = require('nconf');

var environment = process.env.NODE_ENV || 'local';

nconf
  .argv()
  .env()
  .file({ file: './config/' + environment + '.json' });

module.exports = nconf;
