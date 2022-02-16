const express = require('express');
const TaskController = require('../controllers/TaskController');
const TaskOrderController = require('../controllers/TaskOrderController');

const router = express.Router();

router.get('/tasks', TaskController.getAll);
router.post('/tasks', TaskController.create);
router.get('/tasks/:id', TaskController.getById);
router.put('/tasks/:id', TaskController.update);
router.delete('/tasks/:id', TaskController.remove);
router.delete('/tasks/clear', TaskController.removeAll);

router.get('/tasks/title/asc', TaskOrderController.getAllTitleAsc);
router.get('/tasks/title/desc', TaskOrderController.getAllTitleDesc);
router.get('/tasks/status/asc', TaskOrderController.getAllStatusAsc);
router.get('/tasks/status/desc', TaskOrderController.getAllStatusDesc);
router.get('/tasks/updated/asc', TaskOrderController.getAllUpdatedAsc);
router.get('/tasks/updated/desc', TaskOrderController.getAllUpdatedDesc);

module.exports = router;
