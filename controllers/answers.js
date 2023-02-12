import client from "./dabatase.js";

await client.connect();
const answersCollection = client.db('test').collection('answers');

async function getAnswers() {
    const answersCursor = answersCollection.find();
    const answers = [];
    while (await answersCursor.hasNext()) {
        answers.push(await answersCursor.next());
    }
    return answers;
}

async function insertAnswers(answersData) {
    const result = await answersCollection.insertOne(answersData);
    return result;
}

export default {
    getAnswers,
    insertAnswers
}