
function customersController(customerService, fincoreService){


   async function get(req,res) {
        const {query} = req;
        console.log('find');

        const customer = await fincoreService.findCustomer(query);

        if(customer === undefined || customer === "" || customer === {}){
            res.status(404)
            return res.json({
                message:'Can not find customer'
            })
        }

        return res.json(customer);
    }


    function post(req,res){

       const customer = req.body;
       let message = '';

       if(customer.first_name === undefined || customer.first_name ===""){
           res.status(400);
           return res.send('first_name is required');
       }

        if(customer.first_name === undefined || customer.first_name ===""){
            res.status(400);
            return res.send('last_name is required');
        }

        if(customer.email === undefined || customer.email ===""){
            res.status(400);
            return res.send('email is required');
        }

        if(customer.phone === undefined || customer.phone ===""){
            res.status(400);
            return res.send('phone is required');
        }




        res.status(201);
        return res.json(req.body);
    }



    async function getByid(req,res){
        const query = req.params.id;
        const customer = await fincoreService.getByid(query);
        if(customer === undefined || customer === "" || customer === {}){
            res.status(404)
            return res.json({
                message:'Can not find customer'
            })
        }
        return res.json(customer);
    }

    return {post,get, getByid};

}

module.exports = customersController;