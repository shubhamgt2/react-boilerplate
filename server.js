const express = require('express');
const path = require('path');
require('./config/config.js');

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});