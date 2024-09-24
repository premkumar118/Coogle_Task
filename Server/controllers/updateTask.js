const mongoose = require('mongoose')
const Task = require('../models/taskModel')

// Delete a task
const updateTask = async (req, res) => {
    const { id } = req.params

    // validating the id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no such task'})
    }

    const task = await Task.findByIdAndUpdate(id, {...req.body})

    if(!task){
        return res.status(404).json({error: 'no such task'})
    }
    
    res.status(200).json({msg: 'task updated succfully'})
}


module.exports = { updateTask }