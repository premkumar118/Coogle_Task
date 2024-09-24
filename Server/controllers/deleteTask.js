const mongoose = require('mongoose')
const Task = require('../models/taskModel')

// Delete a task
const deleteTask = async (req, res) => {
    const { id } = req.params

    // validating the id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such task' })
    }

    const task = await Task.findByIdAndDelete(id)

    if (!task) {
        return res.status(404).json({ error: 'no such task' })
    }

    res.status(200).json({ msg: 'task deleted succfully' })
}


module.exports = { deleteTask }