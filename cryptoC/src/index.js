const express = require('express');


require('dotenv').config();

const connect = require('./db');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

connect.connectDB();

const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
  });
  