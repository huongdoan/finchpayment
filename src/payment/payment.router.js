const express = require('express');
const fincoreService = require('../utils/fincore.service');

const paymentController = require('./payment.controller');

function routes() {

    const customerRouter = express.Router();

    const controller = paymentController('',fincoreService);

    customerRouter.route('/customers/:id/charges')
        .post(controller.charges);
    customerRouter.route('/customers/:id/chargesv2')
        .post(controller.chargesv2);

    return customerRouter;

}

module.exports = routes;