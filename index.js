// Simple express.js based web server for local development only.
'use strict';
const express = require('express');
const upath = require('upath');

const port = '8080';
const app = express();

app.use(express.static(upath.join(process.cwd(), 'dist'), {
    extensions: 'html'
}));

app.use(function (req, res) {
    res.status(404);
    res.sendFile(upath.join(process.cwd(), 'dist/404.html'));
});

app.listen(port, () => {
    console.log(`THE KINDA BORING PROJECT is alive at http://localhost:${port}`);
});
