module.exports = {
  CHECK: (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      if (!username && !email && !password)
        throw new Error("Invalid data !!!.");
      if (username.length < 3 && !isNaN(+username))
        throw new Error("Invalid username !.");
      if (!email.includes("@")) throw new Error("Invalid email !.");
      if (password.length < 4) throw new Error("Invalid password !.");
      return next();
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
