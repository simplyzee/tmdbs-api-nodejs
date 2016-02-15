var bunyan = require('bunyan'),
    package = require('./package.json'),
    path = require('path');

//get from package file
var applicationName = package.name;
var logPath = path.join(__dirname,'./logs/');

var logPaths = {
    fatal: logPath + applicationName + '-fatal.log',
    error: logPath + applicationName + '-error.log',
    warn:  logPath + applicationName + '-warn.log',
    info:  logPath + applicationName + '-info.log'
};

var log = bunyan.createLogger({
    name: applicationName,
    serializers: bunyan.stdSerializers,
    streams: [
		{
			stream: process.stdout
		},
        {
            //"fatal" (60): The service/app is going to stop or become unusable now.
            level: 'fatal',
            path: logPaths.fatal,
            period: '1d', // daily rotation
            count: 5, // keep 5 back copies
            type: 'rotating-file'
        },
        {
            //"error" (50): Fatal for a particular request, but the service/app continues servicing other requests
            level: 'error',
            path: logPaths.error,
            period: '1d', // daily rotation
            count: 5, // keep 5 back copies
            type: 'rotating-file'
        },
        {
            //"warn" (40): A note on something that should probably be looked at by an operator eventually.
            level : 'warn',
            path : logPaths.warn,
            period: '1d', // daily rotation
            count: 5, // keep 5 back copies
            type: 'rotating-file'
        },
        {
            //"info" (30): Detail on regular operation.
            level: 'info',
            path: logPaths.info,
            period: '1d', // daily rotation
            count: 5, // keep 5 back copies
            type: 'rotating-file'
        }
    ]
});

module.exports = log;
module.exports.stream = {
    write: function(message, encoding){
        log.info(message);
    }
}
