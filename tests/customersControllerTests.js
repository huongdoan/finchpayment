
const should = require('should');
const sinon = require('sinon');


const customerController = require ('../src/controllers/customersController');



describe('Customer controller tests:', () => {
    describe('Post', () =>{
        should();
        it('should not allow an empty name on post', () =>{
           // should();

            const req = {
                body:{
                    name:''
                }
            };

            const res = {
                status: sinon.spy(),
                send: sinon.spy(),
                json: sinon.spy()

            };



            const controller = customerController();
            controller.post(req,res);

            res.status.calledWith(400).should.equal(true, `Bad status ${res.status.args[0][0]} `);
            res.send.calledWith('Name is required').should.equal(true);



        })


    });

});
