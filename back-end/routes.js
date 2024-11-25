const express = require('express');

const routes = express.Router();

routes.use(express.json());

const users = [ 
  {
    id: 1,
    name: 'Igor',
    email: '@gmail.com',
    password: 'chunda123123123',
  },
];

routes.post('/', (req, res) => {
  const { email, password } = req.body


  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return res.status(200).json(user);
  }

  return res.status(401).json({ mens: 'Usuario invalido' });
})

module.exports = routes;
