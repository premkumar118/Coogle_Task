const mongoose = require('mongoose')
const Task = require('../models/taskModel')

// Get all tasks
const getAllTasks = async (req, res) => {
    const tasks = await Task.find().sort({createdAt: -1})

    res.status(200).json(tasks)
}

// Get single task
const getSingleTask = async (req, res) => {
    const { id } = req.params

    // validating the id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such task'})
    }

    const task = await Task.findById(id)

    if(!task){
        return res.status(404).json({error: 'no such task'})
    }
    
    res.status(200).json(task)
}


module.exports = { getAllTasks, getSingleTask }