
function paymentController(customerService, fincoreService) {
    async function get(req, res) {
        console.log('find');
        const query = req.params.id;


        return res.json('');
    }


    function createAccount(req, res) {


        res.status(201);
        return res.json(req.body);
    }

    function charges(req, res) {


        res.status(201);
        return res.json(req.body);
    }

    return {createAccount,get, charges};
}


module.exports = paymentController;