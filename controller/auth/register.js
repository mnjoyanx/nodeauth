const { Sequelize } = require("sequelize");
const User = require('../../models/user')

console.log(User)

class AuthController {
  async register(req, res) {
    const { name, username, email, password } = req.body;
    try {
      const register = await User.create({
        name,
        username,
        email,
        password,
      });
        res.json(register)
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new AuthController();
