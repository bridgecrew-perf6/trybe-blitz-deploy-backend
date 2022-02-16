const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

// const MONGODB_URI = `mongodb://${process.env.HOST || 'mongodb'}:27017/Todolist`;
const MONGODB_URI = 'mongodb+srv://USERNAME:PASSWORD@CLUSTER_NAME.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority';
const DB_NAME = 'Todolist';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGODB_URI, OPTIONS)
  .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
  }));

module.exports = connection;
