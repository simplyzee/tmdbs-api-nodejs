'use strict';
const tmdb = require('moviedb')('755ceee170d06dc11c2bd9f646014c97'),
      log = require('../logger');

function getMoviesFromSearch(movieName, req) {

  return new Promise((resolve, reject) => {

    if(!movieName)
      reject();

    try {
      tmdb.searchMovie({query: movieName}, function(error, response) {
        resolve(response);
      });
    } catch (err) {
      log.error({err: err}, 'Problem querying the search endpoint');
      reject(new Error('Problem querying the search endpoint'));
    }
  });
}

function getMovieById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    try {
      tmdb.movieInfo({id: movieId}, function(error, response) {
        resolve(response);
      });
    } catch (err) {
      log.error({err: err}, 'Problem getting movie information by id');
      reject(new Error('Problem getting movie information by id'));
    }
  });
}

function getMovieCreditsById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    try {
      tmdb.movieCredits({id: movieId}, function(error, response) {
        resolve(response);
      });
    } catch (err) {
      log.error({err: err}, 'Problem getting movie credits by id');
      reject(new Error('Problem getting movie credits by id'));
    }
  });
}

function getMovieImagesById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    try {
      tmdb.movieImages({id: movieId}, function(error, response) {
        resolve(response);
      });
    } catch (err) {
      log.error({err: err}, 'Problem getting movie images by id');
      reject(new Error('Problem getting movie images by id'));
    }
  });
};

function getMovieVideosById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    try {
      tmdb.movieVideos({id: movieId}, function(error, response) {
        resolve(response);
      });
    } catch (err) {
      log.error({err: err}, 'Problem getting movie videos by id');
      reject(new Error('Problem getting movie videos by id'));
    }
  });
};

function getMovieTrailerById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    try {
      tmdb.movieTrailers({id: movieId}, function(error, response) {
        resolve(response);
      });
    } catch (err) {
      log.error({err: err}, 'Problem getting movie trailers by id');
      reject(new Error('Problem getting movie trailers by id'));
    }
  });
};

function getMovieKeywordsById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    try {
      tmdb.movieKeywords({id: movieId}, function(error, response) {
        resolve(response);
      });
    } catch (err) {
      log.error({err: err}, 'Problem getting movie keywords by id');
      reject(new Error('Problem getting movie keywords by id'));
    }
  });
};

function getSimilarMoviesById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    try {
      tmdb.movieSimilar({id: movieId}, function(error, response) {
        resolve(response);
      });
    } catch (err) {
      log.error({err: err}, 'Problem getting similar movies by id');
      reject(new Error('Problem getting similar movies by id'));
    }
  });
};

module.exports = {
  getMoviesFromSearch,
  getMovieById,
  getMovieCreditsById,
  getMovieImagesById,
  getMovieVideosById,
  getMovieKeywordsById,
  getMovieTrailerById,
  getSimilarMoviesById
}
