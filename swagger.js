const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        info: {
            title: 'API de Productos',
            version: '1.0.0',
            description: 'Una API para gestionar productos',
        },
        basePath: '/',
    },
    apis: ['./routes/*.js'], // Esto tomará todos los archivos .js en la carpeta routes
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};
