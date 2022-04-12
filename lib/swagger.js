//swagger

const swaggerJsDoc = require('swagger-jsdoc');

var options = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
        },
        servers: [
            {
                url: 'localhost:3000'
            }
        ]
    },
    swaggerOptions: {
        validatorUrl: null
    },
    apis: ['./routes/*.js'],
};

const swaggerDoc = swaggerJsDoc(options);

module.exports = swaggerDoc;