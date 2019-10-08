const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  year: Number,
  country: String,
  genre: String,
  summary: String,
  actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }],
  director: { type: Schema.Types.ObjectId, ref: 'Director' }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
