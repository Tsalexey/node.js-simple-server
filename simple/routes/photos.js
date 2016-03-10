var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/photo', function(req, res){
  //return all photos
  /*
  */
});

router.get('/photo/:id', function(req, res){
  //return photo with id and it's commentary
  /*

  */
});

router.post('/photo/:photo_id/commentary/add', function(req, res){
  // add commentary for photo
  /*
  models.Commentary.create({
    content: req.body.content
  }).then(function() {
    res.redirect('/');
  });

  */
});

router.post('/photo/:photo_id/commentary/:commentary_id/update', function(req, res){
  // edit commentary for photo
  /*
  models.Commentary.find({ where: {id: req.body.commentary_id} }).on('success', function(commentary) {
    if (commentary) { // if the record exists in the db
      commentary.updateAttributes({
        content: req.body.content
      }).success(function() {});
    }
  })
  */
});

router.post('/photo/:photo_id/commentary/:commentary_id/delete', function(req, res){
  // delete commentary for photo
  /*
  models.Commentary.destroy({
    where: {
      id: req.params.commentary_id
    }
  }).then(function() {
    res.redirect('/');
  });
  */
});

module.exports = router;