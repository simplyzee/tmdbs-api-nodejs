'use strict';
const should = require('should'),
      nock   = require('nock'),
      server = require('../../helpers/server'),
      movieDbHelper = require('../../../helpers/moviedb-helper');

describe('movieDb specs', function() {
  describe('Search the movie called Transformers and get an object back of some movies from it', function() {
    it('should resolve when receiving a list of movies and send back a 200 status', function(done) {

      nock(server.url)
      .get('/search/Transformers')
      .reply(200, [{
        original_title: 'Transformers',
        title: 'Transformers',
        id: 1858,
        release_date: '2007-06-27'
      }]);

      var mockRequest = {};

      movieDbHelper.getMoviesFromSearch('Transformers', mockRequest)
        .then(movies => {
          movies.results[0].original_title.should.eql('Transformers');
          movies.results[0].title.should.eql('Transformers');
          movies.results[0].id.should.eql(1858);
          movies.results[0].release_date.should.eql('2007-06-27');

          done();
        })
        .catch(done);
    });
  })

  describe('Get movie information about Transformers using the ID of the movie', function() {
    it('should resolve when receiving movie information about Transformers and send back a 200 status', function(done) {
      nock(server.url)
      .get('/movie/1858')
      .reply(200, [{
        original_title: 'Transformers',
        imdb_id: 'tt0418279',
        adult: false,
        status: 'Released'
      }]);

      var mockRequest = {};

      movieDbHelper.getMovieById(1858, mockRequest)
        .then(movie => {
          movie.original_title.should.eql('Transformers');
          movie.imdb_id.should.eql('tt0418279');
          movie.adult.should.eql(false);
          movie.status.should.eql('Released');

          done();
        })
        .catch(done);
    });
  });
});
