require('dotenv').config()

const express = require('express') //express JS
const mongoose = require('mongoose') //mongoose
const workoutRoutes = require('./routes/Workouts') //workout routes

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/workouts', workoutRoutes)

//database connection
//MONGO_URI env
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //PORT env
        app.listen(process.env.PORT, () => {
            console.log('Listening on Port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })