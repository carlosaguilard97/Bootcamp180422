const express = require('express');
const app = express.Router();

app.use('/auth', require('./auth/login'))
app.use('/usuario', require('./usuarios/usuario'));
app.use('/producto', require('./productos/producto'));
app.use('/empresa', require('./empresas/empresa'));
app.use('/permisos/api', require('./permisos/api'));
app.use('/permisos/rol', require('./permisos/rol'));
app.use('/imagen', require('./imagen/imagen'));


module.exports = app;

