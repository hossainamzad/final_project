const express = require('express');
const itemsController = require('../controllers/itemsController');
const itemsRoutes = express.Router();
itemsRoutes.post('/items', itemsController.create);
itemsRoutes.route('/items')
            .get(itemsController.index)
            .delete(itemsController.destroy)
            .put(itemsController.update);

module.exports = itemsRoutes;

