const express = require('express')
const addServer = require('./js/add-server')
const app = express()
const path = require('path');
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/add-server.html'));
});

app.get('/api/v1/add-server', (req, res) => {
    //THIS CREATES NEW VIRTUAL MACHINE AND SERVER
    //addServer();

    addServer((data) => {
        console.log('data', data);
        res.json(data);
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))