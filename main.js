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
conn.once('open', async () => {
  // a. Add a new agent of your own
  // const newAgent = new Agent({
  //   firstName: 'Carl',
  //   lastName: 'Michael',
  //   birthDate: '1980'
  // });
  // newAgent.save().then(() => {
  //   console.log('New Agent Saved.');
  // });
  // b. Add 2 new actors of your own to your new agent
  // const newActor1 = new Actor({
  //   firstName: 'Brad',
  //   lastName: 'Pitt',
  //   birthDate: '1963'
  // });
  // newActor1.save().then(resActor => {
  //   console.log(`${resActor.firstName} was succesfully saved to the DB.`);
  //   Agent.findOneAndUpdate(
  //     { firstName: 'Carl' },
  //     { $push: { actors: resActor._id } },
  //     (err, resAgent) => {
  //       if (err) throw err;
  //       console.log(
  //         `${resActor.firstName} was added to the list of Actors for ${resAgent.firstName}`
  //       );
  //     }
  //   );
  // });
  // const newActor2 = new Actor({
  //   firstName: 'George',
  //   lastName: 'Clooney',
  //   birthDate: '1961'
  // });
  // newActor2.save().then(resActor => {
  //   console.log(`${resActor.firstName} was succesfully saved to the DB.`);
  //   Agent.findOneAndUpdate(
  //     { firstName: 'Carl' },
  //     { $push: { actors: resActor._id } },
  //     (err, resAgent) => {
  //       if (err) throw err;
  //       console.log(
  //         `${resActor.firstName} was added to the list of Actors for ${resAgent.firstName}`
  //       );
  //     }
  //   );
  // });

  // c. Add new movie of your own, use your new actors plus 1 existing actor plus existing director
  // const newMovie = new Movie({
  //   title: "Ocean's Eleven",
  //   year: 2001,
  //   country: 'USA',
  //   genre: 'Crime',
  //   summary: `Dapper Danny Ocean (George Clooney) is a man of action. Less than 24 hours into his parole from a New Jersey penitentiary, the wry, charismatic thief is already rolling out his next plan. Following three rules: Don't hurt anybody, don't steal from anyone who doesn't deserve it, and play the game like you've got nothing to lose. Danny orchestrates the most sophisticated, elaborate casino heist in history.`
  // });

  // await Director.findOne({ firstName: 'Woody', lastName: 'Allen' }, (err, director) => {
  //   if (err) throw err;
  //   newMovie.director = director._id;
  //   console.log(`Director ${director.firstName} was added to ${newMovie.title}`);
  // });
  // await Actor.findOne({ firstName: 'Brad', lastName: 'Pitt' }, (err, actor) => {
  //   if (err) throw err;
  //   newMovie.actors.push(actor._id);
  //   console.log(`Actor ${actor.firstName} was added to ${newMovie.title}`);
  // });
  // await Actor.findOne({ firstName: 'George', lastName: 'Clooney' }, (err, actor) => {
  //   if (err) throw err;
  //   newMovie.actors.push(actor._id);
  //   console.log(`Actor ${actor.firstName} was added to ${newMovie.title}`);
  // });
  // await Actor.findOne({ firstName: 'Bill', lastName: 'Murray' }, (err, actor) => {
  //   if (err) throw err;
  //   newMovie.actors.push(actor._id);
  //   console.log(`Actor ${actor.firstName} was added to ${newMovie.title}`);
  // });

  // await newMovie.save().then(movie => {
  //   console.log(`Movie ${movie.title} was succesfully saved.`);
  // });

  // d. Change birth on an actor
  // await Actor.findOneAndUpdate(
  //   { firstName: 'Brad', lastName: 'Pitt' },
  //   { birthDate: 1964 },
  //   (err, actor) => {
  //     if (err) throw err;
  //     console.log(`Actor ${actor.firstName} birthdate has been changed.`);
  //   }
  // );

  // e. Change movie title
  await Movie.findOneAndUpdate({ title: 'Heat 2' }, { title: 'Heat 3' }, (err, movie) => {
    if (err) throw err;
    console.log(movie);
    console.log(`Movie ${movie.title} title has been changed.`);
  });
});
