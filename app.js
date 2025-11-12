const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Yello, CI/CD!');
});

module.exports = app;
