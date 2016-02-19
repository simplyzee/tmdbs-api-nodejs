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

router.get('/movie/:movieid/videos', function(req, res) {
  movieDbService.getMovieVideosById(req.params.movieid, req)
    .then(movie => {
      res.json(movie);
    })
    .catch(err => {
      log.error({metaData: req.metaData, err: err}, 'An error occured trying to retrieve the movie videos by its id');
    });
});

router.get('/movie/:movieid/trailers', function(req, res) {
  movieDbService.getMovieTrailerById(req.params.movieid, req)
    .then(movie => {
      res.json(movie);
    })
    .catch(err => {
      log.error({metaData: req.metaData, err: err}, 'An error occured trying to retrieve the movie trailers by its id');
    });
});

router.get('/movie/:movieid/keywords', function(req, res) {
  movieDbService.getMovieKeywordsById(req.params.movieid, req)
    .then(movie => {
      res.json(movie);
    })
    .catch(err => {
      log.error({metaData: req.metaData, err: err}, 'An error occured trying to retrieve the movie keywords by its id');
    });
});

router.get('/movie/:movieid/similar', function(req, res) {
  movieDbService.getSimilarMoviesById(req.params.movieid, req)
    .then(movie => {
      res.json(movie);
    })
    .catch(err => {
      log.error({metaData: req.metaData, err: err}, 'An error occured trying to retrieve the similar movies by its id');
    });
});

router.get('/latestmovies', function(req, res) {
  movieDbService.getLatestMovies(req)
    .then(movie => {
      res.json(movie);
    })
    .catch(err => {
      log.error({metaData: req.metaData, err: err}, 'An error occured trying to retrieve the latest movies');
    });
});

// TODO: implement versioning and output
router.get('/version', function(req, res) {
  res.send('0.0.1');
});

module.exports = router;
