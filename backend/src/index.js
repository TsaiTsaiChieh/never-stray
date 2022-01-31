const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hi There')
});

app.listen(5555, () => {
  console.log('backend at 5555');
})