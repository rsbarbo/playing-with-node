var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/people';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllPeople: getAllPeople,
  getSinglePerson: getSinglePerson,
  createPersonProfile: createPersonProfile,
  updatePerson: updatePerson,
  removePerson: removePerson
};
