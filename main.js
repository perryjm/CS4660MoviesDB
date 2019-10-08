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
conn.once('open', () => {
  // a. Add a new agent of your own
  // const newAgent = new Agent({
  //   firstName: 'Carl',
  //   lastName: 'Michael',
  //   birthDate: '1980'
  // });     
  // newAgent.save().then(() => {
  //   console.log('New Agent Saved.');
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
  Actor.findOne({
    firstName: "Scarlett",
    lastName: "Johansson"
  }, (err, actor) => {
    if (err) {
      console.error("something went wrong with Actor query", err);
      conn.close();
    } else {
      console.log("Movies with", actor.firstName, actor.lastName, "in it:");
      Movie.find({
          actors: actor.id
        })
        .populate('actors')
        .populate('director')
        .exec((err, movies) => {
          if (err) {
            console.error("something went wrong with Movie query", err);
            conn.close();
          } else {
            movies.forEach((movie) => {
              console.log(movie.title, '-', movie.year);
              console.log('\tdirector:', movie.director.firstName, movie.director.lastName);
              console.log('\tactors:')
              movie.actors.forEach((actor) => {
                console.log('\t\t', actor.firstName, actor.lastName);
              })
              conn.close();
            })
          }
        })
    }
  })
  // query i. List all actors with a specific agent
  // query j. List all movies using an actor with a specific agent
  // query k. How many actors does a specific agent represent?

});