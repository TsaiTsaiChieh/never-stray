const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: [
    'http://44.198.131.68',
    'http://localhost:8080',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.json(`Hi There, ${req.headers.origin}`)
});

app.listen(8080, () => {
  console.log('backend at 8080');
})