const express = require('express');
const routes = express.Router();
const instructors = require('./admin/instructors');

routes.get('/', function (req, res) {
    return res.redirect('/instructors');
});

routes.get('/instructors', function (req, res) {
    return res.render('instructors/index');
});

routes.get('/instructors/create', function (req, res) {
    return res.render('instructors/create');
});

routes.post('/instructors', instructors.post);

routes.get('/members', function (req, res) {
    return res.render('members/index');
});

module.exports = routes;
