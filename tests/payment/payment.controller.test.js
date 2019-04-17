//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();

chai.use(chaiHttp);

describe('payments', () => {

    // describe('/POST payments', () => {
    //     it('it should add a payment card successfully', (done)  => {
    //         chai.request(server)
    //             .post('/api/payment')
    //             .end((err, res) => {
    //                 res.should.have.status(201);
    //                 done();
    //             });
    //     });
    //
    // });
});

