const express = require('express')
const router = express.Router()

const { createTask } = require('../controllers/createTask')
const { getAllTasks, getSingleTask } = require('../controllers/getTask')
const { deleteTask } = require('../controllers/deleteTask')
const { updateTask } = require('../controllers/updateTask')


// POST a task
router.post('/', createTask)

// GET all tasks
router.get('/', getAllTasks)

// GET single task
router.get('/:id', getSingleTask)

// UPDATE a task
router.patch('/:id', updateTask)

// DELETE a task
router.delete('/:id', deleteTask)


module.exports = router