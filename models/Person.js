const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personOptions = {
  discriminatorKey: 'personType'
};

const personSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    birthDate: Number
  },
  personOptions
);

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
