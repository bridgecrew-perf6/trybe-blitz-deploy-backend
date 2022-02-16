const TaskService = require('../services/TaskService');

const getAll = async (_req, res) => {
  const tasks = await TaskService.getAll();
  res.status(200).json(tasks);
};

const create = async (req, res, next) => {
  const { title, status } = req.body;
  const task = await TaskService.create({ title, status });
  if (task.error) return next(task.error);
  res.status(201).json({ task });
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const task = await TaskService.getById(id);
  if (task.error) return next(task.error);
  res.status(200).json(task);
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { title, status } = req.body;
  const task = await TaskService.update({ id, title, status });
  if (task.error) return next(task.error);
  res.status(200).json(task);
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  const task = await TaskService.remove(id);
  if (task.error) return next(task.error);
  res.status(204).json();
};

const removeAll = async (_req, res, next) => {
  const task = await TaskService.removeAll();
  if (task.error) return next(task.error);
  res.status(204).json();
};

module.exports = { getAll, create, getById, update, remove, removeAll };
