const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    getTask,
    deleteTask
} = require('./tasks')
router.route('/').get(getAllTasks).post(createTask);
router.route('/getTask').get(getTask).delete(deleteTask);

module.exports = router;