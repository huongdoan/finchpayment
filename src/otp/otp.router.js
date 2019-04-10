const express = require('express');
const fincoreService = require('../utils/fincore.service');

const otpController = require('./otp.controller');

function routes() {

    const otpRouter = express.Router();

    const controller = otpController('',fincoreService);

    otpRouter.route('/customers/:id/otp')
        .post(controller.post);
    return otpRouter;

}

module.exports = routes;