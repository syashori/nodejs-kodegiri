const express = require('express');
const cors = require('cors');
const TestRoute = require('./routes/TestRoute.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  TestRoute
);

app.listen(5000, () => {
    console.log('Server up and running at localhost with port 5000');
  });