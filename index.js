const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const morgan = require('morgan');
const logger = morgan('dev');

let number = 3;

app.use(logger);

app.get('/api', (req, res) => {
    res.json({
        status: "hello world"
    })
});

app.get('/api/counter', (req, res) => {
    res.json({
        value: number
    });
});

// adding 1
app.post('/api/counter', (req, res) => {
    number++;
    res.json({
        status: 'incremented',
        value: number
    });
});

// subtract 1
app.put('/api/counter', (req, res) => {
    number--;
    res.json({
        status: 'decremented',
        value: number
    });
});

// reset to 0
app.delete('/api/counter', (req, res) => {
    number = 0;
    res.json({
        status: 'reset',
        value: number
    });
});

server.listen(7000, () => {
    console.log(`Express API listening at port 7000`);
});