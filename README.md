# family-friendly-api
----
This is the API for family-friendly. The app and website which are seperate projects will be able to connect to this endpoint hopefully with an authenticated token and send/ receive data.

## Install
* clone repository
* npm install to install node modules
* npm test to run tests
* npm run start to start the app
* API lives on http://localhost:3000
----
## TO-DO
* Implement authenticated token for sending and getting a request from the server.
* Implement more tests around the movie api endpoints.
  * ```movie/:movieid/similarmovies```
  * ```movie/latestmovies```
* add to collection? ```account/collection/:id ``` - this would need user data registering... maybe something to look at.
* Add Helmet JS to protect API from XSS and other exploits
