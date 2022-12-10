import Express from 'express';
import { MongoClient } from 'mongodb';

const app = Express();

const url = 'mongodb://mongo:27017';
const dbName = 'CounerLoggerDb';
const dbClient = new MongoClient(url);

const main = async () => {
  await dbClient.connect();
  const db = dbClient.db(dbName);
  const collection = db.collection('logs');

  app.get('/', async (request, response) => {
    const userAgent = request.headers['user-agent'];
    const logs = await collection.find({}).toArray();
    const counter = ++logs.length;
    await collection.insertOne({ id: counter, datetime: new Date(), client_info: userAgent });
    
    response.send(`<h2>Hello! I have been seen ${counter} times</h2>`);
  });

  app.listen(3000);
};

main();
