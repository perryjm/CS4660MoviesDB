const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = require('./Person');

const actorSchema = new Schema({
  agent: { type: Schema.Types.ObjectId, ref: 'Agent' },
  movies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
});

const Actor = Person.discriminator('Actor', actorSchema, 'Actor');

module.exports = Actor;
