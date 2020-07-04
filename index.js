const express = require('express');
const app = express();
const userRoutes = require('./routes/userRouter.js');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userInfoRoutes = require('./routes/userInfoRouter.js');
const locationsRoutes = require('./routes/locationsRouter');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('secretKey', config.get('jwtToken.secret'));

mongoose.connect(config.get('Mongodb.dbConfig')), { useNewUrlParser: true, useUnifiedTopology: true };

app.listen(8080, function(err){
    if(err) console.error(err);
    else console.log(`Все хорошо!`)
});



mongoose.connection.on('connected',()=>
{
    console.info("Еще лучше");
});

app.use('/', userRoutes);
app.use('/', userInfoRoutes);
app.use('/', locationsRoutes);









