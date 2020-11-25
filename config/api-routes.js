const workout = require("../models/workout.js");

module.exports = function(app){
    // find all workouts
    app.get("/api/workouts", async function(req, res){
        const result = await workout.find({})
        res.send(result)
    })
    // create new workout
    app.post("/api/workouts", async function(req, res){
        const result = await workout.create({})
        res.send(result)
    })
    // add exercises to the new workout
    app.put('/api/workouts/:id', async function(req, res) {
        const result = await workout.findOneAndUpdate({_id: req.params.id}, { $push: {exercises: req.body} }, { new: true})
        res.send(result)
    })
    // show stats
    app.get("/api/workouts/range", async function(req, res){
        const response= await workout.find({})
        res.send(response)
    })
}