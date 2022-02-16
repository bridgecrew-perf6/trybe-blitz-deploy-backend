const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

// const URI = `mongodb://${process.env.HOST || 'mongodb'}:27017/Todolist`;
const URI = process.env.MONGODB_URI;
const DB_NAME = 'Todolist';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(URI, OPTIONS)
  .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
  }));

module.exports = connection;
