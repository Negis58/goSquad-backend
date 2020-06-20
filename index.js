const express = require('express');
const app = express();
const userRoutes = require('./routes/userRouter.js');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userInfoRoutes = require('./routes/userInfoRouter.js');

app.set('secretKey', config.get('jwtToken.secret'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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








