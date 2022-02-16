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

const getAllUpdatedAsc = async () => {
  const tasks = await OrderTask.getAllUpdatedAsc();
  return tasks;
};

const getAllUpdatedDesc = async () => {
  const tasks = await OrderTask.getAllUpdatedDesc();
  return tasks;
};

module.exports = {
  getAllTitleAsc,
  getAllTitleDesc,
  getAllStatusAsc,
  getAllStatusDesc,
  getAllUpdatedAsc,
  getAllUpdatedDesc,
};
