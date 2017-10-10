const express = require('express');
const itemsController = require('../controllers/itemsController');
const itemsRoutes = express.Router();
itemsRoutes.route('/user')
            .get(itemsController.indexAll)
            .delete(itemsController.destroy)
            .put(itemsController.update);

module.exports = itemsRoutes;

