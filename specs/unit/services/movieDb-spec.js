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

  describe('Get movie credits for Transformers using the ID of the movie', function() {
    it('should resolve when receiving the credits about Transformers and send back a 200 status', function(done) {
      nock(server.url)
      .get('/movie/1858/credits')
      .reply(200, [{
          id: 1858,
          cast:[{
            cast_id: 9,
            character: 'Sam \'Spike\' Witwicky',
            credit_id: '52fe431bc3a36847f803abd1',
            id: 10959,
            name: 'Shia LaBeouf',
            order: 0,
            profile_path: '/anP0tygzniIok6L3OxcSZ9TYCF3.jpg'
          }]
      }]);

      var mockRequest = {};

      movieDbHelper.getMovieCreditsById(1858, mockRequest)
        .then(movie => {
          movie.id.should.eql(1858);
          movie.cast[0].character.should.eql('Sam \'Spike\' Witwicky');
          movie.cast[0].credit_id.should.eql('52fe431bc3a36847f803abd1');
          movie.cast[0].name.should.eql('Shia LaBeouf');
          done();
        })
        .catch(done);
    });
  });

  describe('Get movie images for Transformers using the ID of the movie', function() {
    it('should resolve when receiving the images about Transformers and send back a 200 status', function(done) {
      nock(server.url)
      .get('/movie/1858/images')
      .reply(200, [{
          id: 1858,
          backdrops:[ {
            aspect_ratio: 1.77777777777778,
            file_path: '/ac0HwGJIU3GxjjGujlIjLJmAGPR.jpg',
            height: 1080,
            iso_639_1: null,
            vote_average: 5.47619047619048,
            vote_count: 11,
            width: 1920
          }]
      }]);

      var mockRequest = {};

      movieDbHelper.getMovieImagesById(1858, mockRequest)
        .then(movie => {
          movie.id.should.eql(1858);
          movie.backdrops[0].height.should.eql(1080);
          movie.backdrops[0].width.should.eql(1920);
          movie.backdrops[0].aspect_ratio.should.eql(1.77777777777778);

          done();
        })
        .catch(done);
    });
  });

  describe('Get movie videos for Transformers using the ID of the movie', function() {
    it('should resolve when receiving the videos about Transformers and send back a 200 status', function(done) {
      nock(server.url)
      .get('/movie/1858/videos')
      .reply(200, [{
        id: 1858,
        results:[{
          id: '533ec659c3a36854480009ee',
          iso_639_1: 'en',
          key: 'ejxQOv53lXs',
          name: 'Trailer 2',
          site: 'YouTube',
          size: 720,
          type: 'Trailer'
        }]
      }]);

      var mockRequest = {};

      movieDbHelper.getMovieVideosById(1858, mockRequest)
        .then(movie => {
          movie.id.should.eql(1858);
          movie.results[0].id.should.eql('533ec659c3a36854480009ee');
          movie.results[0].type.should.eql('Trailer');
          movie.results[0].size.should.eql(720);
          movie.results[0].key.should.eql('ejxQOv53lXs');
          movie.results[0].site.should.eql('YouTube');

          done();
        })
        .catch(done);
    });
  });
});
