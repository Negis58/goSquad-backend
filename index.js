const express = require('express');
const app = express();
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRouter.js');
const userInfoRoutes = require('./routes/userInfoRouter.js');
const locationsRoutes = require('./routes/locationsRouter');
const profileRoutes = require('./routes/profileRouter');
const gameRoutes = require('./routes/gameRouter.js');
const gameIconRoutes = require('./routes/gameIconRouter');
const imageRoutes = require('./routes/imageRouter');
const messageRoutes = require('./routes/messageRouter');
const postRoutes = require('./routes/postRouter');
const platformRoutes = require('./routes/platformRouter');

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
app.use('/', profileRoutes);
app.use('/', gameRoutes);
app.use('/', gameIconRoutes);
app.use('/', imageRoutes);
app.use('/', messageRoutes);
app.use('/', postRoutes);
app.use('/', platformRoutes);









