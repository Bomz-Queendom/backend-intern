const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    level: 'silly',
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.File({
            filename: './logger/error.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json())
        }),
    ]
});

module.exports = logger;