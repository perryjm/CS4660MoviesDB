const dotEnv = require('dotenv').config();
const mongoose = require('mongoose');

// Models
const Actor = require('./models/Actor');
const Agent = require('./models/Agent');
const Director = require('./models/Director');
const Movie = require('./models/Movie');
const Role = require('./models/Role');

// DB Data
const dbUser = process.env.dbAtlasUserName;
const dbPassword = process.env.dbAtlasPassword;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@cs4660-4yw3q.mongodb.net/MoviesCS4660?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
// Queries
conn.once('open', () => {
  // a. Add a new agent of your own
  const newAgent = new Agent({
    firstName: 'Carl',
    lastName: 'Michael',
    birthDate: '1980'
  });     
  newAgent.save().then(() => {
    console.log('New Agent Saved.');
  });
});
conn.close();
