const User = require('../models/User.moduel');
const { compareSync } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cache = require('memory-cache');
const uuid = require('uuid');
exports.GetToken = async function (req, res, next) {
  try {
    let token = await authenticateUser(req.fields.email, req.fields.password);
    let refreshToken = uuid.v4();
    cache.put(refreshToken, req.fields.email);
    res.cookie('twitterAccessJwt', token);
    res.cookie('refreshTokentwitterAccessJwt', refreshToken);
    res.json({ token, refreshToken });
  } catch (error) {
    console.error(error);
    switch (error) {
      case 'User not found':
        res.status(401).end();
        break;
      case 'Email or password incorrect':
        res.status(401).end();
        break;
      default:
        res.status(500).end();
    }
  }
};

async function authenticateUser(email, password) {
  try {
    let user = await User.findOne({
      where: {
        email: email
      }
    });
    if (!user) {
      return Promise.reject('User not found');
    }
    if (!compareSync(password, user.password)) {
      return Promise.reject('Email or password incorrect');
    }
    let userObject = { user: user.email };
    let token = generateToken(userObject);
    return token;
  } catch (error) {
    console.error(error);
    return Promise.reject('The server made a booboo');
  }
}

exports.RefreshToken = async function (req, res, next) {
  if (!req.fields.refreshToken) {
    res.status(400).end();
    return;
  }
  let email = cache.get(req.fields.refreshToken);
  cache.del(req.fields.refreshToken);
  if (!email) {
    res.status(404).end();
    return;
  }
  let user = await User.findOne({
    where: {
      email
    }
  });
  if (!user) {
    res.status(404).end();
    return;
  }
  let userObject = { user: user.email };
  let refreshToken = uuid.v4();
  cache.put(refreshToken, user.email);
  let token = generateToken(userObject);
  res.json({
    token,
    refreshToken
  });
};

function generateToken(userObject, exp = '1h') {
  let token = jwt.sign(
    {
      data: userObject
    },
    process.env.JTW_SECRET,
    { expiresIn: exp }
  );
  return token;
}
