const express = require('express');
const fincoreService = require('../utils/fincore.service');
const customerService = require('../customer/customer.service');

const customerController = require('./customer.controller');

function routes() {

    const customerRouter = express.Router();

    const controller = customerController(customerService,fincoreService);

    customerRouter.route('/customers')
        .get(controller.get);
    customerRouter.route('/customers/:id')
        .get(controller.getByid);
    customerRouter.route('/customers')
        .post(controller.post);

    return customerRouter;

}

module.exports = routes;