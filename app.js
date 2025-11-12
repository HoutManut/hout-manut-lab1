const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Yello, GitHub Actions!');
});

module.exports = app;
