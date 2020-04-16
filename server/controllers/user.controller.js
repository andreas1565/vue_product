const User = require('../models/User.moduel');
const { hashSync } = require('bcryptjs');
exports.CreateUser = async function(req, res) {
  try {
    req.fields.password = hashSync(req.fields.password, 10);
    const user = await User.create(req.fields);
    res
      .status(201)
      .json(user)
      .end();
  } catch (error) {
    if (error.message) {
      res
        .status(400)
        .json({ message: error.message })
        .end();
    }
  }
};
