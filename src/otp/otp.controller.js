
function otpController(customerService, fincoreService) {
    async function get(req, res) {
        console.log('find');
        const query = req.params.id;


        return res.json('');
    }


    function post(req, res) {


        res.status(201);
        return res.json(req.body);
    }

    function del(req, res){
        res.status(201);
        return res.json(req.body);
    }



    return {post,get, del};
}


module.exports = otpController;