const express = require('express')
const router = express.Router();
//const usersCtrl = require("../../controllers/")
const usersCtrl = require('../../controllers/api/users');

//POST /api/users
router.post('/', usersCtrl.create)

//login route also a POST building out my route for Login. 
router.post("/login", usersCtrl.login)

module.exports = router;