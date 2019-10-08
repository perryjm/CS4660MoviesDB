const dotEnv = require('dotenv').config();
const mongoose = require('mongoose');
const faker = require('faker');

// Models
const Agent = require('../models/Agent');

// DB Data
const dbUser = process.env.dbAtlasUserName;
const dbPassword = process.env.dbAtlasPassword;

function generateAgent() {
  const randFirstName = faker.name.firstName();
  const randLastName = faker.name.lastName();
  const randYear = 1967;

  return { randFirstName: randFirstName, randLastName: randLastName, randYear: randYear };
}

function main() {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cs4660-4yw3q.mongodb.net/MoviesCS4660?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const conn = mongoose.connection;
  conn.on('error', console.error.bind(console, 'connection error:'));
  conn.once('open', async () => {
    for (const i of Array(3).keys()) {
      const randAgent = generateAgent();
      const agent = new Agent({
        firstName: randAgent.randFirstName,
        lastName: randAgent.randLastName,
        birthDate: randAgent.randYear
      });
      agent.save().then(() => {
        console.log('Agent Saved');
      });
    }
  });
}

main();
