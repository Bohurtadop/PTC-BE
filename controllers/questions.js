import client from "./dabatase.js";

await client.connect();
const questionsCollection = client.db('test').collection('questions');

async function getQuestions() {
    const questionsCursor = questionsCollection.find();
    const questions = [];
    while (await questionsCursor.hasNext()) {
        questions.push(await questionsCursor.next());
    }
    return questions;
}

export default {
    getQuestions,
}