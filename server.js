const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public')); // paste de img e styles raiz
server.use(routes);
server.set('view engine', 'njk'); //formato arquivos

nunjucks.configure('views', {
    express: server,
    noCache: true,
    autoescape: true
});

server.listen(5000, function () {
    console.log('Running');
});
