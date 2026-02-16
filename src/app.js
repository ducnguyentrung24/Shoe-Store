const express = require('express');
const cors = require('cors');

const app = express();

const userRoutes = require('./modules/user/user.route');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Shoe Store API!');
});

app.use('/api/users', require('./modules/user/user.route'));


module.exports = app;