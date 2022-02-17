const TaskOrderService = require('../services/TaskOrderService');

const getAllTitleAsc = async (_req, res) => {
  const tasks = await TaskOrderService.getAllTitleAsc();
  res.status(200).json(tasks);
};

const getAllTitleDesc = async (_req, res) => {
  const tasks = await TaskOrderService.getAllTitleDesc();
  res.status(200).json(tasks);
};

const getAllStatusAsc = async (_req, res) => {
  const tasks = await TaskOrderService.getAllStatusAsc();
  res.status(200).json(tasks);
};

const getAllStatusDesc = async (_req, res) => {
  const tasks = await TaskOrderService.getAllStatusDesc();
  res.status(200).json(tasks);
};

const getAllCreatedAsc = async (_req, res) => {
  const tasks = await TaskOrderService.getAllCreatedAsc();
  res.status(200).json(tasks);
};

const getAllCreatedDesc = async (_req, res) => {
  const tasks = await TaskOrderService.getAllCreatedDesc();
  res.status(200).json(tasks);
};

module.exports = {
  getAllTitleAsc,
  getAllTitleDesc,
  getAllStatusAsc,
  getAllStatusDesc,
  getAllCreatedAsc,
  getAllCreatedDesc,
};
