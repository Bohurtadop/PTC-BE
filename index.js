import express from 'express';
import client from './controllers/dabatase.js';
import questionsRouter from './routes/questions.js';
import companiesRouter from './routes/companies.js';

const server = express();

await client.connect();
console.log('database connected');

server.listen(3001, () => {
    console.log('server listen on port 3001');
});

server.get('/', (req, res) => {
    res.send('Hello world');
})

server.use('/questions', questionsRouter);
server.use('/companies', companiesRouter);
