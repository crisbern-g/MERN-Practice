const WorkoutModel = require('../models/WorkoutModel')
const mongoose = require('mongoose')

//all workouts
const getWorkouts = async (req, res) => {
    const workouts = await WorkoutModel.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//single workouts
const getWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No surh workout"})
    }

    const workout = await WorkoutModel.findById(id)

    if(!workout){
        return res.status(404).json({error:"No surh workout"})
    }

    res.status(200).json(workout)
}

//create new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body

    try{
        const workout = await WorkoutModel.create({title, reps, load}) //returns a JSON
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No surh workout"})
    }

    const workout = await WorkoutModel.findByIdAndDelete(id)

    if(!workout){
        return res.status(404).json({error:"No surh workout"})
    }

    res.status(200).json(workout)
}


//update workout
const updateWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No surh workout"})
    }

    const workout = await WorkoutModel.findByIdAndUpdate(id, {...req.body})

    if(!workout){
        return res.status(404).json({error:"No surh workout"})
    }

    res.status(200).json(workout)
}

//exports
module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}