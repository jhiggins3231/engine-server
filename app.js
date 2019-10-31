require('dotenv').config();


/*
WILL NEED A ROUTER SECTION FOR BLUDEBADGE PROJECT. EXAMPLE USE DIFFERENT ROUTES TO VIEW DIFFERENT ENGINES
REFERENCE REACT-FUNDAMENTALS SIDEBAR.JS FOR HELP
*/



//Applications
const express = require('express');
const app = express();

//Routes
const wishlist = require('./controllers/wishlistcontroller')
const user = require('./controllers/usercontroller')



const sequelize = require('./db');
sequelize.sync(); 
app.use(express.json());
app.use(require('./middleware/headers'));

//Endpoints
app.use('/auth', user);
app.use(require('./middleware/validateSession'));
app.use('/wishlist', wishlist);



app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));