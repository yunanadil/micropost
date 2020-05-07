const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyparser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

// Handle production
if (process.env.NODE_ENV === 'production') {
	// Static folder
	app.use(express.static(__dirname + '/public/'));

	// Handle SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
