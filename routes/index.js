const app = require('express').Router();

// localhost:6969/api/
app.get('/', (req, res) => {
	res.JSON('Hello from this route!!');
});

module.exports = app;