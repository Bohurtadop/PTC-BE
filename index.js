import express from 'express';
import cors from 'cors';
import client from './controllers/dabatase.js';
import questionsRouter from './routes/questions.js';
import companiesRouter from './routes/companies.js';
import answersRouter from './routes/answers.js';
import bodyParser from 'body-parser';

const server = express();

await client.connect();
console.log('database connected');

server.listen(3001, () => {
    console.log('server listen on port 3001');
});

server.get('/', (req, res) => {
    res.send('Hello world');
});

server.use(cors());
server.use(bodyParser.json());

server.use('/questions', questionsRouter);
server.use('/companies', companiesRouter);
server.use('/answers', answersRouter);