require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 1000;

app.get('/', (req, res) => {
  res.send('Server is running on port 1000');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
