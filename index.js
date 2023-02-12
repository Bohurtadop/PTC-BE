import express from 'express';

const server = express();

server.listen(3000, () => {
    console.log('server listen on port 3000');
});

server.get('/', (req, res) => {
    res.send('Hello world');
})