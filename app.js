const express = require('express');
const userController = require('./controllers/userController');
const transferController = require('./controllers/transferController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.json());

// Rotas de usuário
app.post('/registrar', userController.registrar);
app.post('/entrar', userController.entrar);
app.get('/usuarios', userController.listarUsuarios);

// Rotas de transferência
app.post('/transferir', transferController.transferir);
app.get('/transferencias', transferController.listarTransferencias);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
