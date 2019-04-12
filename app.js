const express  = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const basicAuth = require('./src/utils/basic-auth');
const errorHandler = require('./src/utils/errorhandler');
const customerRouter = require('./src/customer/customer.router')();
const cardRouter = require('./src/card/card.router')();
const paymentRouter = require('./src/payment/payment.router')();
//const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
app.use(express.json());

app.use(cors());

// use basic HTTP auth to secure the api
app.use('/api',basicAuth);


// api routes
app.use('/api', customerRouter);

app.use('/api', cardRouter);

app.use('/api', paymentRouter);

// global error handler
app.use(errorHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port,()=>{
    console.log(`runnning port ${port}`);
});
