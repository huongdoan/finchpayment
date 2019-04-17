//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();

chai.use(chaiHttp);
const { loginWithDefaultUser } = require('../commons/common.test');
describe('cusomters', () => {

    //id: 1, email: 'test1@test.com', phone: '1111', firstName: 'Test', lastName: 'User', merchantId:'1'
     let token ;
     before(async ()=>{
         //get token
         let resToken =  await loginWithDefaultUser();
         token = resToken.body.token;
     })

    describe('/POST customer',  () => {

        it('it should not pass validate, if email is invalid', function (done) {
            chai.request(server)
                .set("Authorization", "Basic "+ token)
                .post('/api/customers')
                .send({ email: '1122', phone: '1111', firstName: '123', lastName:'test', merchantId:'1' })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });

        it('it should not pass validate, if email is invalid', function (done) {
            chai.request(server)
                .post('/api/customers')
                .send({ email: '', phone: '1111', firstName: '123', lastName:'test', merchantId:'1' })
                .end((err, res) => {
                res.should.have.status(401);
                    done();
                });
        });

        it('it should not pass validate , if last Name is undined', function (done) {
            chai.request(server)
                .post('/api/customers')
                .send({ email: 'test1@test.com', phone: '1111', firstName: '123', merchantId:'1' })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });

        it('it should not pass validate, if last Name is empty', function (done) {
            chai.request(server)
                .post('/api/customers')
                .send({ email: 'test1@test.com', phone: '1111', lastName: '', merchantId:'1' })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });

        it('it should not pass validate first name, if first Name is undined', function (done) {
            chai.request(server)
                .post('/api/customers')
                .send({ email: 'test1@test.com', phone: '1111', lastName: 'User', merchantId:'1' })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });

        it('it should not pass validate first name, if put wrong first Name', function (done) {
            chai.request(server)
                .post('/api/customers')
                .send({ email: 'test1@test.com', phone: '1111', firstName: '', lastName: 'User', merchantId:'1' })
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });

        // it('it should create customer with beautiful body', function (done) {
        //     chai.request(server)
        //         .post('/api/customers')
        //         .send({ email: 'test1@test.com', phone: '1111', firstName: 'Test', lastName: 'User', merchantId:'1' })
        //         .end((err, res) => {
        //             res.should.have.status(200);
        //             done();
        //         });
        // });

    });

    describe('/GET customer', () => {
        it('it should get all customers', (done)  => {

            chai.request(server)
                .get('/api/customers')
                .query({ phone: '1111'})
                .end((err, res) => {
                    res.should.have.status(401);
                    // res.body.should.have.property('email');
                    // res.body.should.have.property('phone');
                    // res.body.should.have.property('firstName');
                    // res.body.should.have.property('lastName');
                    // res.body.should.have.property('merchantId');
                    done();
                });
        });

        it('it should not find any customers', (done)  => {

            chai.request(server)
                .get('/api/customers')
                .query({ phone: '1231'})
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });

        it('it should not find any customers, if query by empty phone', (done)  => {

            chai.request(server)
                .get('/api/customers')
                .query({ phone: ''})
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });

        it('it should not find any customers, if query by empty email', (done)  => {

            chai.request(server)
                .get('/api/customers')
                .query({ email: ''})
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });

        it('it should not find any customers, if not include query', (done)  => {
            chai.request(server)
                .get('/api/customers')
                .end((err, res) => {
                    res.should.have.status(401);
                    done();
                });
        });

    });


});

