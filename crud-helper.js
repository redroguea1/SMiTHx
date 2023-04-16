// Connect to the database
require('dotenv').config();
require('./config/database');
 
// Require the Mongoose models
// const User = require('./models/user');

//WHAT will this look like in SMiTHx

// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');
 
// Local variables will come in handy
let user, item, category, order;
let users, items, categories, orders;