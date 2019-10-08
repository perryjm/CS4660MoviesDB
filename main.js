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
  `mongodb+srv://${dbUser}:${dbPassword}@cs4660-4yw3q.mongodb.net/MoviesCS4660?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));
// Queries
conn.once('open', async () => {
  // query a. Add a new agent of your own
  // const newAgent = new Agent({
  //   firstName: 'Carl',
  //   lastName: 'Michael',
  //   birthDate: '1980'
  // });
  // newAgent.save().then(() => {
  //   console.log('New Agent Saved.');
  // });
  // query b. Add 2 new actors of your own to your new agent
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

  // query c. Add new movie of your own, use your new actors plus 1 existing actor plus existing director
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

  // query d. Change birth on an actor
  // await Actor.findOneAndUpdate(
  //   { firstName: 'Brad', lastName: 'Pitt' },
  //   { birthDate: 1964 },
  //   (err, actor) => {
  //     if (err) throw err;
  //     console.log(`Actor ${actor.firstName} birthdate has been changed.`);
  //   }
  // );

  // query e. Change movie title
//   await Movie.findOneAndUpdate({ title: 'Heat 2' }, { title: 'Heat 3' }, (err, movie) => {
//     if (err) throw err;
//     console.log(movie);
//     console.log(`Movie ${movie.title} title has been changed.`);
//   });
// });

  // query f. List all movies (include director and actors)
  // Movie.find({}, (movies, err) => {
  //   if (err) {
  //     console.error('something is wrong', err);
  //   }
  //   else {
  //     console.log(movies);
  //   }
  //   conn.close();
  // })

  // query g. List all movies with a specific director (include actors)
  // Director.findOne({
  //   firstName: 'Sofia',
  //   lastName: 'Coppola'
  // }, (err, dir) => {
  //   if (err) {
  //     console.error('director query failed', err);
  //     conn.close();
  //   } else {
  //     console.log("All movies by", dir.firstName, dir.lastName, ":");
  //     Movie.find({director: dir.id}).populate('actors').exec((err, movies) => {
  //       if (err) {
  //         console.error('movie query failed', err);
  //         conn.close();
  //       } else {
  //         movies.forEach((movie)=> {
  //           console.log(movie.title, movie.year);
  //           console.log('actors:')
  //           movie.actors.forEach((actor)=> {
  //             console.log('\t', actor.firstName, actor.lastName);
  //           })
  //         })
  //         conn.close();
  //       }
  //     })
  //   }
  // })

  // query h. List all movies with a specific actor (include director and actors)
  // Actor.findOne({
  //   firstName: "Scarlett",
  //   lastName: "Johansson"
  // }, (err, actor) => {
  //   if (err) {
  //     console.error("something went wrong with Actor query", err);
  //     conn.close();
  //   } else {
  //     console.log("Movies with", actor.firstName, actor.lastName, "in it:");
  //     Movie.find({
  //         actors: actor.id
  //       })
  //       .populate('actors')
  //       .populate('director')
  //       .exec((err, movies) => {
  //         if (err) {
  //           console.error("something went wrong with Movie query", err);
  //           conn.close();
  //         } else {
  //           movies.forEach((movie) => {
  //             console.log(movie.title, '-', movie.year);
  //             console.log('\tdirector:', movie.director.firstName, movie.director.lastName);
  //             console.log('\tactors:')
  //             movie.actors.forEach((actor) => {
  //               console.log('\t\t', actor.firstName, actor.lastName);
  //             })
  //             conn.close();
  //           })
  //         }
  //       })
  //   }
  // })

  // query i. List all actors with a specific agent
  // Agent.findOne({
  //     firstName: "Carl",
  //     lastName: "Michael"
  //   })
  //   .populate('actors')
  //   .exec((err, agent) => {
  //     if (err) {
  //       console.error('Something went wrong on agent query', err);
  //       conn.close();
  //     } else {
  //       conn.close();
  //       console.log("Agent", agent.firstName, agent.lastName, "has the following actors:");
  //       agent.actors.forEach((actor) => {
  //         console.log('\t', actor.firstName, actor.lastName);
  //       })
  //     }
  //   })

  // query j. List all movies using an actor with a specific agent
  // Agent.findOne({
  //     firstName: "Carl",
  //     lastName: "Michael"
  //   })
  //   .populate({
  //     path: 'actors',
  //     populate: {
  //       path: 'movies',
  //       select: 'title'
  //     }
  //   })
  //   .exec((err, agent) => {
  //     if (err) {
  //       console.error('Something went wrong on agent query', err);
  //       conn.close();
  //     } else {
  //       conn.close();
  //       console.log("Agent", agent.firstName, agent.lastName, "has the following actors:");
  //       console.log(agent.actors)
  //       agent.actors.forEach((actor) => {
  //         console.log('\t', actor.firstName, actor.lastName);
  //         actor.movies.forEach((movie) => {
  //           console.log('\t\t', movie.title);
  //         })
  //       })
  //     }
  //   })

  // query k. How many actors does a specific agent represent?
  // Agent.findOne({
  //   firstName: "Carl",
  //   lastName: "Michael"
  // }, (err, agent) => {
  //   if (err) {
  //     console.error("something went wrong with agenet query")
  //   } else {
  //     console.log("Agent", agent.firstName, agent.lastName, "has", agent.actors.length, "actors.");
  //   }
  //   conn.close();
  // })

});
