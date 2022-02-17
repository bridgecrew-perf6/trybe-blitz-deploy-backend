const connection = require('./connection');

const DB_COLLECTION = 'tasks';

const getAllTitleAsc = async () => {
  const db = await connection();
  const results = await db.collection(DB_COLLECTION).find().sort({ title: 1 }).toArray();
  return results;
};

const getAllTitleDesc = async () => {
  const db = await connection();
  const results = await db.collection(DB_COLLECTION).find().sort({ title: -1 }).toArray();
  return results;
};

const getAllStatusAsc = async () => {
  const db = await connection();
  const results = await db.collection(DB_COLLECTION).find().sort({ status: 1 }).toArray();
  return results;
};

const getAllStatusDesc = async () => {
  const db = await connection();
  const results = await db.collection(DB_COLLECTION).find().sort({ status: -1 }).toArray();
  return results;
};

const getAllCreatedAsc = async () => {
  const db = await connection();
  const results = await db.collection(DB_COLLECTION).find().sort({ createdAt: 1 }).toArray();
  return results;
};

const getAllCreatedDesc = async () => {
  const db = await connection();
  const results = await db.collection(DB_COLLECTION).find().sort({ createdAt: -1 }).toArray();
  return results;
};

module.exports = {
    getAllTitleAsc,
    getAllTitleDesc,
    getAllStatusAsc,
    getAllStatusDesc,
    getAllCreatedAsc,
    getAllCreatedDesc,
};
