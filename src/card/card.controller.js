const axios = require('axios');
const APP_CONFIG = require('../config/app-config');

function cardController(customerService, fincoreService) {
    async function get(req, res) {
        console.log('config:' + APP_CONFIG.API_URLS);
        try {
            axios.get(APP_CONFIG.API_URLS + 'customers', {
                auth: {
                    username: APP_CONFIG.SECRET_API_KEY,
                    password: APP_CONFIG.SECRET_API_KEY_PASS
                }
            }).then(function (response){
                return res.json({
                    data: response.data,
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers,
                    config: response.config
                });
            });
        } catch (error) {
            console.error(error)
        }
    }


    function post(req, res) {
        console.log('post card req:' + APP_CONFIG.API_URLS + 'cards');
        console.log('post card req:' + req);
        if (req.body.type !== 'physical_card') return res.json({
            status: APP_CONFIG.STATUS_ERROR_CODE,
            statusText: 'invalid card type'
        });
        try {
            axios({
                method: 'post',
                url: APP_CONFIG.API_URLS + 'cards',
                data: {
                    publishable_api_key: APP_CONFIG.PUBLISHABLE_API_KEY,
                    number: req.body.primary_number,
                    expiry_month: req.body.expiration_month,
                    expiry_year: req.body.expiration_year,
                    cvc: req.body.security_code,
                    name: 'Roland Robot',
                    address_line1: '42 Sevenoaks St',
                    address_line2: '42 Sevenoaks St',
                    address_city: 'Lathlain',
                    address_postcode: '6454',
                    address_state: 'WA',
                    address_country: 'Australia'
                }
            }).then(function (response){
                return res.json({
                    account_token: response.data.response.token,
                    account_name: response.data.response.name,
                    status: response.status,
                    statusText: response.statusText
                });
            });
        } catch (error) {
            console.error(error);
            return res.json({
                status: error
            });
        }
        /*res.status(201);

        return res.json({
            message: 'post cards'
        });*/
        //return res.json(req.body);
    }

    function del(req, res){
        res.status(201);
        return res.json(req.body);
    }



    return {post,get, del};
}


module.exports = cardController;
