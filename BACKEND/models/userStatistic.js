const mongoose = require('mongoose');
const uniqueValidetor = require('mongoose-unique-validator')

const Schena = mongoose.Schema;

const userStatistcSchema = new Schena({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
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

userStatistcSchema.plugin(uniqueValidetor);

module.exports = mongoose.model('UserStatistc', userStatistcSchema)