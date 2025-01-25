const {MongoClient} = require('mongodb');

const url = "mongodb+srv://patilharshal:Harshal%407523@cluster0.o4exb.mongodb.net/";

const client =new MongoClient(url);

async function dbConnect(database , collect)
{
    const result = await client.connect();
    const db = result.db(database);
    const collection = db.collection(collect);
    return collection;
}

module.exports = dbConnect;