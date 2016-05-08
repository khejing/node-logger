var winston = require('winston');
winston.add(require('winston-syslog').Syslog, {showLevel: false, json: true});
winston.remove(winston.transports.Console);

module.exports = winston;
