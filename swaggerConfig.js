const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Bicicletas",
            version: "1.0.0",
            description: "Documentación de la API REST para la gestión de bicicletas",
        },
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "Servidor local",
            },
        ],
    },
    apis: ["./routes/api/bicicletas.js", "./models/bicicleta.js"],
};

// Generar documentación
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Función para integrar Swagger en la aplicación Express
const swaggerDocs = (app) => {
    if (!app) {
        throw new Error("Express app no fue proporcionada a swaggerDocs");
    }

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`📄 Swagger Docs disponible en http://localhost:3000/api-docs`);
};

module.exports = swaggerDocs;
