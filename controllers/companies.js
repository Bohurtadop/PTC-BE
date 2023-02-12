import client from "./dabatase.js";

await client.connect();
const companiesCollection = client.db('test').collection('companies');

async function getCompanies() {
    const companiesCursor = companiesCollection.find();
    const companies = [];
    while (await companiesCursor.hasNext()) {
        companies.push(await companiesCursor.next());
    }
    return companies;
}

export default {
    getCompanies,
}