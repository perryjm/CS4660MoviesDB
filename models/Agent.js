const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = require('./Person');

const agentSchema = new Schema({
  actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }]
});

const Agent = Person.discriminator('Agent', agentSchema, 'Agent');

module.exports = Agent;
