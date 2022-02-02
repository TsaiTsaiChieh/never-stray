const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: [
    "*",
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
  // credentials: true
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());


app.get('/', (req, res) => {
  console.log(req.headers);
  res.json(`Hi There, ${req.headers.origin}`)
});

app.listen(8080, () => {
  console.log('backend at 8080');
})