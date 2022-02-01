const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hi There1')
});

app.listen(8080, () => {
  console.log('backend at 8080');
})