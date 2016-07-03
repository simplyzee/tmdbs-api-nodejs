'use strict';
var apiKey = process.env.NODE_ENV == 'production' ? process.env.apiKey : global.config.get("API_KEY");
const tmdb = require('moviedb')(apiKey),
      log = require('../logger');

function getMoviesFromSearch(movieName, req) {

  return new Promise((resolve, reject) => {

    if(!movieName)
      reject();

    tmdb.searchMovie({query: movieName}, function(error, response) {
      if(error) {
        log.error({error: error}, 'Problem querying the search endpoint');
        reject(new Error('Problem querying the search endpoint'));
      }

      resolve(response);
    });
  });
}

function getMovieById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    tmdb.movieInfo({id: movieId}, function(error, response) {
      if(error) {
        log.error({error: error}, 'Problem getting movie information by id');
        reject(new Error('Problem getting movie information by id'));
      }

      resolve(response);
    });
  });
}

function getMovieCreditsById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    tmdb.movieCredits({id: movieId}, function(error, response) {
      if(error) {
        log.error({error: error}, 'Problem getting movie credits by id');
        reject(new Error('Problem getting movie credits by id'));
      }

      resolve(response);
    });
  });
}

function getMovieImagesById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    tmdb.movieImages({id: movieId}, function(error, response) {
      if(error) {
        log.error({error: error}, 'Problem getting movie images by id');
        reject(new Error('Problem getting movie images by id'));
      }
      resolve(response);
    });
  });
}

function getMovieVideosById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    tmdb.movieVideos({id: movieId}, function(error, response) {
      if(error) {
        log.error({error: error}, 'Problem getting movie videos by id');
        reject(new Error('Problem getting movie videos by id'));
      }
      resolve(response);
    });
  });
}

function getMovieTrailerById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    tmdb.movieTrailers({id: movieId}, function(error, response) {
      if(error) {
        log.error({error: error}, 'Problem getting movie trailers by id');
        reject(new Error('Problem getting movie trailers by id'));
      }
      resolve(response);
    });
  });
}

function getMovieKeywordsById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    tmdb.movieKeywords({id: movieId}, function(error, response) {
      if(error) {
        log.error({error: error}, 'Problem getting movie keywords by id');
        reject(new Error('Problem getting movie keywords by id'));
      }
      resolve(response);
    });
  });
}

function getSimilarMoviesById(movieId, req) {
  return new Promise((resolve, reject) => {
    if(!movieId)
      reject();

    tmdb.movieSimilar({id: movieId}, function(error, response) {
      if(error) {
        log.error({error: error}, 'Problem getting similar movies by id');
        reject(new Error('Problem getting similar movies by id'));
      }
      resolve(response);
    });
  });
}

function getLatestMovies(req) {
  return new Promise((resolve, reject) => {

    tmdb.miscNowPlayingMovies({}, function(error, response) {
      if(error) {
        log.error({error: error}, 'Problem getting latest movies');
        reject(new Error('Problem getting latest movies'));
      }
      resolve(response);
    });
  });
}

module.exports = {
  getMoviesFromSearch,
  getMovieById,
  getMovieCreditsById,
  getMovieImagesById,
  getMovieVideosById,
  getMovieKeywordsById,
  getMovieTrailerById,
  getSimilarMoviesById,
  getLatestMovies
};
