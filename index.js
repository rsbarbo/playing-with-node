var express = require('express');
var router = express.Router();
var db = require('./queries');

function getAllPeople(req, res, next) {
  db.any('select * from peeps')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all individuals'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


router.get('/api/people', db.getAllPeople);
// router.get('/api/people/:id', db.getSinglePerson);
// router.post('/api/people', db.createPersonProfile);
// router.put('/api/people/:id', db.updatePerson);
// router.delete('/api/people/:id', db.removePerson);


module.exports = router;
