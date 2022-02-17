const OrderTask = require('../models/OrderTask');

const getAllTitleAsc = async () => {
  const tasks = await OrderTask.getAllTitleAsc();
  return tasks;
};

const getAllTitleDesc = async () => {
  const tasks = await OrderTask.getAllTitleDesc();
  return tasks;
};

const getAllStatusAsc = async () => {
  const tasks = await OrderTask.getAllStatusAsc();
  return tasks;
};

const getAllStatusDesc = async () => {
  const tasks = await OrderTask.getAllStatusDesc();
  return tasks;
};

const getAllCreatedAsc = async () => {
  const tasks = await OrderTask.getAllCreatedAsc();
  return tasks;
};

const getAllCreatedDesc = async () => {
  const tasks = await OrderTask.getAllCreatedDesc();
  return tasks;
};

module.exports = {
  getAllTitleAsc,
  getAllTitleDesc,
  getAllStatusAsc,
  getAllStatusDesc,
  getAllCreatedAsc,
  getAllCreatedDesc,
};
