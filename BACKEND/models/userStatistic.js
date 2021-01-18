const mongoose = require('mongoose');

const Schena = mongoose.Schema;

const userStatistcSchema = new Schena({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  statistic: { 
    hard: {
      victory: { type: Number, required: true },
      loss: { type: Number, required: true },
      draw: { type: Number, required: true },
      AverageRating: { type: Number, required: true },
    },
    easy: {
      victory: { type: Number, required: true },
      loss: { type: Number, required: true },
      draw: { type: Number, required: true },
      AverageRating: { type: Number, required: true },
    },
  },  
})

module.exports = mongoose.model('UserStatistc', userStatistcSchema)