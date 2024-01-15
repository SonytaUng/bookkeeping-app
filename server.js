const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let entries = [];

app.get('/api/bookkeeping/entries', (req, res) => {
  res.json(entries);
});

app.post('/api/bookkeeping/entries', (req, res) => {
  const entry = req.body;
  entry.id = entries.length + 1;
  entries.push(entry);
  res.json(entry);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
