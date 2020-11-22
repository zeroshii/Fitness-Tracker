const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
      {
          type: {
              type: String,
              required: true,
              trim: true
          },
          name: {
              type: String,
              required: true,
              trim: true
          },
          duration: {
              type: Number
          },
          weight: {
              type: Number
          },
          reps: {
              type: Number
          },
          sets: {
              type: Number
          }
      }
  ]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
