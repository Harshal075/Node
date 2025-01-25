const {MongoClient} = require('mongodb');
// Encode the special characters in the password
const url = "mongodb+srv://patilharshal:Harshal%407523@cluster0.o4exb.mongodb.net/";

const client = new MongoClient(url);

async function getData()
{
    const result = await client.connect();
    const db = result.db('Database1');
    const collection = db.collection('Products')
    const response = await collection.find({}).toArray();
    console.log(response);
}
getData();