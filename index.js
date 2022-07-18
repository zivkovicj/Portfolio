const express = require('express');
const cors = require('cors');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const app = express();

app.use(cors());

app.use(express.static('Public'));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});