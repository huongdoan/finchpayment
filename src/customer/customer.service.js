
const Customer = require('../models/customer');

const awaitErorrHandlerFactory = middleware => {
    return async (customer) => {
        try {
            await middleware(customer);
        } catch (err) {
            next(err);
        }
    };
};

module.exports = {
    createCustomer,
    findCustomer,
    getByid
};


async function createCustomer(customer) {

    try {
        const c = await Customer.create(customer);
        return c;
    } catch (err) {
        throw err;
    }


  /*  awaitErorrHandlerFactory(async (customer) => {

        const c = Customer.create(customer);
        return {
            status:'success',
            data:c
        };
    })*/
}

async function findCustomer({ email, phone }) {

}


async function getByid(id) {

}