const User = require('../../models/user')
const bcrypt = require('bcrypt'); //thanks MARIA!!! 
const jwt = require('jsonwebtoken')

module.exports = {
    create,
    login
};

async function create(req,res) {
    try {
        // Add the user to the database
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
      } catch (err) {
        // Client will check for non-2xx status code 
        // 400 = Bad Request]
        console.log(err)
        res.status(400).json(err);
      }
}

async function login(req, res) {
    try {
      // Find the user by their email address
      const user = await User.findOne({username: req.body.username});
      if (!user) throw new Error();
      // Check if the password matches
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.json( createJWT(user) );
    } catch {
        //ensuring an error is thrown when credentials are bad. 
      res.status(400).json('Bad Credentials');
    }
  }

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}
  