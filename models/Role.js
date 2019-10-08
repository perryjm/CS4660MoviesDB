const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  role: String,
  actor: { type: Schema.Types.ObjectId, ref: 'Actor' },
  movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
