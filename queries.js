var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/people';
var db = pgp(connectionString);

// add query functions

function getAllPeople(req, res, next) {
  db.any('select * from peeps')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all people'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllPeople: getAllPeople
  // getSinglePerson: getSinglePerson,
  // createPersonProfile: createPersonProfile,
  // updatePerson: updatePerson,
  // removePerson: removePerson
};
