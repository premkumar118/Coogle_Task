require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/tasks')

// express app
const app = express()


// middleware function
app.use(express.json())


// routes
app.use('/api/tasks', taskRoutes)


// connect to db
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        // listern for request
        const PORT = process.env.PORT || 6000
        app.listen(PORT, () => {
            console.log(`Connected to db & running on port ${PORT}.`);
        })
    })
    .catch((error) => {
        console.log(error);
    })


/* // listern for request
const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
    console.log(`running on port ${PORT}.`);
}) */