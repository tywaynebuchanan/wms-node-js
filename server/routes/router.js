const express = require('express');
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

/*
* @descrption Root Route / Home Page
* @method GET /
*/
route.get('/',services.homeRoutes)

/*
* @descrption add users
* @method GET /add_user
*/
route.get('/add_user',services.addUsers)

/*
* @descrption update users
* @method GET /update_user
*/

route.get('/update_user',services.updateUsers)

//API

route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)

module.exports = route;