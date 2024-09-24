const Task = require('../models/taskModel')

// Create a new task
const createTask = async (req, res) => {
    const {title, description, status} = req.body

    //adding data to db
    try {
        const addTask = await Task.create({
            title,
            description,
            status
        })
        
        res.status(200).json({msg: 'task created succfully'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = { createTask }