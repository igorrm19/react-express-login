const express = require('express');

const routes = express.Router();

const users = [
  {
    id: 1,
    name: 'Igor',
    email: '@gmail.com',
    password: 'chunda123123123',
  },
];

routes.get('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return res.status(200).json(user);
  }

  return res.status(401).json({ mensagem: 'Usuario invalido' });
});

module.exports = routes;
