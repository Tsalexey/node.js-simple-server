var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/article', function(req, res, next){
  //return all photos
  if (err) return next(err);
  res.json(articles);  
  /*
  */
});

router.get('/article/:id', function(req, res, next){
  //return article with id and it's commentary
  console.log(req.params.id + " - id");  
  /*

  */
});

router.post('/article/:article_id/commentary/add', function(req, res, next){
  // add commentary for photo
  /*
  models.Commentary.create({
    content: req.body.content
  }).then(function() {
    res.redirect('/');
  });

  */
});

router.post('/article/:article_id/commentary/:commentary_id/update', function(req, res, next){
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

router.post('/article/:article_id/commentary/:commentary_id/delete', function(req, res, next){
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