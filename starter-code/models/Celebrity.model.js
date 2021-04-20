const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const celebritySchema = new Schema ({
  name: String,
  occupation: String,
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'Movie'
  },
  catchPhrase: String
}, {
  timestamps: true
});

module.exports = model('Celebrity', celebritySchema);