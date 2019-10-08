const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = require('./Person');

const directorSchema = new Schema({
  movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
});

const Director = Person.discriminator('Director', directorSchema, 'Director');

module.exports = Director;
