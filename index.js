var winston = require('winston');
winston.add(require('winston-syslog').Syslog, {showLevel: false, json: true});
winston.remove(winston.transports.Console);
winston.setLevels(winston.config.syslog.levels);

module.exports = winston;
