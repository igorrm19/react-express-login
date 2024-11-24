const express = require('express');
const { send } = require('vite');
const Routes = require('./routes');
const cors = require('cors')
const App = express();

App.use(express.json);
App.use(cors())
App.use(Routes);

App.get('/', (res, req) => {
  const { email, password } = req.body;
  res.send(email);
});

App.listen(3000, () => {
  console.log('Deu certo na porta ' + 3000);
});
