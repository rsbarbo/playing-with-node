var express = require('express');
var route = express.Route();

var db = require('../queries.js');

router.get('/api/people', db.getAllPeople);
router.get('/api/people/:id', db.getSinglePerson);
router.post('/api/people', db.createPersonProfile);
router.put('/api/people/:id', db.updatePerson);
router.delete('/api/people/:id', db.removePerson);

module.exports = router;
