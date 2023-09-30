const { read, write } = require("../utils/utils");

module.exports = {
  POST: (req, res) => {
    try {
      const { username, email, password } = req.body;

      const users = require("../models/users.json");

      const newUser = {
        id: uuid.v4(),
        username,
        email,
        password,
      };

      users.push(newUser);
      write("users", users);
      res.json({ message: "New user added.", location: "index" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
