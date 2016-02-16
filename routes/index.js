const express = require('express'),
      router = express.Router(),
      log = require('../logger'),
      movieDbService = require('../helpers/moviedb-helper');

router.get('/', function(req, res) {
  res.sendStatus(200);
});

router.get('/search/:moviename', function(req, res) {

  movieDbService.getMoviesFromSearch(req.params.moviename, req)
    .then(movies => {
      res.json(movies);
    })
    .catch(err => {
      log.error({metaData: req.metaData, err: err}, 'An error occurred trying to retrieve movies');
    });
});

router.get('/movie/:movieid', function(req, res) {
  movieDbService.getMovieById(req.params.movieid, req)
    .then(movie => {
      res.json(movie);
    })
    .catch(err => {
      log.error({metaData: req.metaData, err: err}, 'An error occured trying to retrieve the movie information by its id');
    });
});

router.get('/movie/:movieid/credits', function(req, res) {
  movieDbService.getMovieCreditsById(req.params.movieid, req)
    .then(movie => {
      res.json(movie);
    })
    .catch(err => {
      log.error({metaData: req.metaData, err: err}, 'An error occured trying to retrieve the movie credits by its id');
    });
});

router.get('/movie/:movieid/images', function(req, res) {
  movieDbService.getMovieImagesById(req.params.movieid, req)
    .then(movie => {
      res.json(movie);
    })
    .catch(err => {
      log.error({metaData: req.metaData, err: err}, 'An error occured trying to retrieve the movie images by its id');
    });
});


// TODO: implement versioning and output
router.get('/api/:version', function(req, res) {
  res.send(req.params.version);
});

module.exports = router;
