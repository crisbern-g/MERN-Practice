const express = require('express')

//controllers
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutsController')

const router = express.Router()

//Get All Workouts
router.get('/', getWorkouts)


//Get single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router