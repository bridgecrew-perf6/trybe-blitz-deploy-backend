const { ObjectId } = require('mongodb');
const connection = require('./connection');

const DB_COLLECTION = 'tasks';

const getAll = async () => {
  const db = await connection();
  const results = await db.collection(DB_COLLECTION).find().toArray();
  return results;
};

const create = async (task) => {
  const db = await connection();
  const result = await db.collection(DB_COLLECTION).insertOne(task);
  return result;
};

const getById = async (id) => {
  const db = await connection();
  const result = await db.collection(DB_COLLECTION).findOne({ _id: ObjectId(id) });
  return result;
};

const update = async (task) => {
  const { _id, ...newTaskInfo } = task;
  const db = await connection();
  await db.collection(DB_COLLECTION).updateOne({ _id: ObjectId(_id) }, { $set: newTaskInfo });
  return task;
};

const remove = async (id) => {
  const db = await connection();
  const result = await db.collection(DB_COLLECTION).deleteOne({ _id: ObjectId(id) });
  return result;
};

const removeAll = async () => {
  const db = await connection();
  const result = await db.collection(DB_COLLECTION).deleteMany({});
  return result;
};

module.exports = { getAll, create, getById, update, remove, removeAll };
