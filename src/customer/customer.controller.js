
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
       let errors = [];

       if(customer.first_name === undefined || customer.first_name ===""){
          errors.push({
              fieldName:'first_name',
              message:'required'
          });
       }

        if(customer.last_name === undefined || customer.last_name ===""){
            errors.push({
                fieldName:'last_name',
                message:'required'
            });
        }

        if(customer.email === undefined || customer.email ===""){
            errors.push({
                fieldName:'email',
                message:'required'
            });
        }

        if(customer.phone === undefined || customer.phone ===""){
            errors.push({
                fieldName:'phone',
                message:'required'
            });
        }

        if(errors.length >0){
            res.status(401);
            return res.json({errors:errors});
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