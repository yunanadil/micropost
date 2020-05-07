const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyparser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
