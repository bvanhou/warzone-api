'use strict';

// Make sure to "npm install faker" first.
const Faker = require('faker');

module.exports.generateRandomData = (userContext, events, done) => {
  // generate data with Faker:
  const name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
  // add variables to virtual user's context:
  userContext.vars.name = name;
  // continue with executing the scenario:
  return done();
}