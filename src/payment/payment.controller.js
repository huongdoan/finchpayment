
function paymentController(customerService, fincoreService) {



    function chargesv2(req, res) {


        res.status(201);
        return res.json(req.body);
    }

    function charges(req, res) {


        res.status(201);
        return res.json(req.body);
    }

    return {charges, chargesv2};
}


module.exports = paymentController;