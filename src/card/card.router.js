const express = require('express');
const fincoreService = require('../utils/fincore.service');

const cardController = require('./card.controller');

function routes() {

    const cardRouter = express.Router();

    const controller = cardController('',fincoreService);

    cardRouter.route('/cards')
        .get(controller.get);
    cardRouter.route('/cards')
        .post(controller.post);
    cardRouter.route('/customers/:id/accounts')
        .delete(controller.del);

    return cardRouter;

}

module.exports = routes;