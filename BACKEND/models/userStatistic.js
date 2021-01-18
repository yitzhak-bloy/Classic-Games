const mongoose = require('mongoose');

const Schena = mongoose.Schema;

const userStatistcSchema = new Schena({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  statistic: { 
    hard: {
      victory: { type: Number },
      loss: { type: Number },
      draw: { type: Number },
      AverageRating: { type: Number },
    },
    easy: {
      victory: { type: Number },
      loss: { type: Number },
      draw: { type: Number },
      AverageRating: { type: Number },
    },
  },  
})

module.exports = mongoose.model('UserStatistc', userStatistcSchema)