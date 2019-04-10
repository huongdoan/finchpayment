

const customers = [{ id: 1, email: 'test1@test.com', phone: '1111', firstName: 'Test', lastName: 'User', merchantId:'1' },
                    { id: 2, email: 'test2@test.com', phone: '1111', firstName: 'Test', lastName: 'User', merchantId:'1'}
                    ];

module.exports = {
    findCustomer,
    getByid
};

async function findCustomer({ email, phone }) {
    const customer = customers.find( c => c.email === email || c.phone === phone);
    return customer;
}


async function getByid(id) {
    const customer = customers.find( c => String(c.id) === id);
    return customer;
}