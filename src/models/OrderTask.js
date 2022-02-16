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

const getAllUpdatedAsc = async () => {
  const db = await connection();
  const results = await db.collection(DB_COLLECTION).find().sort({ updated: 1 }).toArray();
  return results;
};

const getAllUpdatedDesc = async () => {
  const db = await connection();
  const results = await db.collection(DB_COLLECTION).find().sort({ updated: -1 }).toArray();
  return results;
};

module.exports = {
    getAllTitleAsc,
    getAllTitleDesc,
    getAllStatusAsc,
    getAllStatusDesc,
    getAllUpdatedAsc,
    getAllUpdatedDesc,
};
