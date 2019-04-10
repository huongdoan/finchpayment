const express = require('express');
const fincoreService = require('../utils/fincore.service');

const paymentController = require('./payment.controller');

function routes() {

    const customerRouter = express.Router();

    const controller = paymentController('',fincoreService);

    customerRouter.route('/customers/:id/accounts')
        .get(controller.get);
    customerRouter.route('/customers/:id/accounts')
        .post(controller.createAccount);
    customerRouter.route('/customers/:id/charges')
        .post(controller.charges);

    return customerRouter;

}

module.exports = routes;