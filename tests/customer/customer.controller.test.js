//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();

chai.use(chaiHttp);

describe('cusomters', () => {0

    describe('/GET customer', () => {
        it('it should get all customers', (done)  => {

            chai.request(server)
                .get('/api/customers')
                .query({ phone: '1111'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('email');
                    res.body.should.have.property('phone');
                    res.body.should.have.property('firstName');
                    res.body.should.have.property('lastName');
                    res.body.should.have.property('merchantId');
                    done();
                });
        });

        it('it should not find any customers', (done)  => {

            chai.request(server)
                .get('/api/customers')
                .query({ phone: '1231'})
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });

        it('it should not find any customers, if query by empty phone', (done)  => {

            chai.request(server)
                .get('/api/customers')
                .query({ phone: ''})
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });

        it('it should not find any customers, if query by empty email', (done)  => {

            chai.request(server)
                .get('/api/customers')
                .query({ email: ''})
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });

        it('it should not find any customers, if not include query', (done)  => {
            chai.request(server)
                .get('/api/customers')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });

    });
});

