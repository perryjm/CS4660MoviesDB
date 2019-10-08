const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = require('./Person');

const producerSchema = new Schema({
  movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
});

const Producer = Person.discriminator('producerSchema', producerSchema, 'Producer');

module.exports = Producer;
