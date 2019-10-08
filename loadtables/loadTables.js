const dotEnv = require('dotenv').config();
const mongoose = require('mongoose');

// Models
const Person = require('../models/Person');
const Actor = require('../models/Actor');
const Agent = require('../models/Agent');
// const Producer = require('./models/Producer');
const Director = require('../models/Director');
const Movie = require('../models/Movie');
const Role = require('../models/Role');

// DB Data
const dbUser = process.env.dbAtlasUserName;
const dbPassword = process.env.dbAtlasPassword;

// Movie Data
const movieData = require('../data/data');

async function handleData(movie) {
  movie.actors.forEach(actor => {
    Person.findOne({ firstName: actor.firstName }, async (err, actorDB) => {
      if (actorDB) return;
      else await writeActor(actor);
    });
  });

  const director = new Director({
    firstName: movie.director.firstName,
    lastName: movie.director.lastName,
    birthDate: movie.director.birthDate
  });
  await director.save();

  return await writeMovie(movie);
}

async function writeMovie(movie) {
  console.log('Saving', movie.title);
  const mov = new Movie({
    title: movie.title,
    year: movie.year,
    country: movie.country,
    genre: movie.genre,
    summary: movie.summary
  });
  return await mov.save();
}

async function writeActor(actor) {
  console.log('Saving Actor', actor.firstName, actor.lastName);
  const act = new Actor({
    firstName: actor.firstName,
    lastName: actor.lastName,
    birthDate: actor.birthDate
  });

  return await act.save();
}

function main() {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cs4660-4yw3q.mongodb.net/MoviesCS4660?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const conn = mongoose.connection;
  conn.on('error', console.error.bind(console, 'connection error:'));
  conn.once('open', async () => {
    const movieArrayPromises = movieData.map(movie => handleData(movie));
    Promise.all(movieArrayPromises).then(() => {
      conn.close();
    });
  });
}

main();
