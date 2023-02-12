import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://root:1234567890@clustertest.obtk1uu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

export default client;