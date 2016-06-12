# Hackaton Starter React
For Original Hackathon README, please go [here](https://github.com/sahat/hackathon-starter/blob/master/README.md).

## Purpose
"Hackathon" seems like a great start even for non-hackathon-based projects; in particular, projects that have a potentially longer a shelf-life, but still provide lots of commonly-used infrastructure api-hooks for many 3rd-party authenticators, non-SPA views for login, forgot password, bootply.

## Getting Started and Use
### Getting Started
#### after cloning, `npm install`
#### bundling client script `npm run webpack`
#### fire it up `npm start`

### setup for grunt tasks
#### `npm i grunt grunt-cli -g`

### Rendering Documentation
#### install jsdoc globally `npm i jsdoc -g`
#### configure `config/jsdoc.conf.json` for any changes you deem necessary
#### `grunt jsdoc`
Thereafter, you should browse to folder `docs` to view generated content

### JSHint
#### see `gruntfile.js` for configuration
#### currently, you will experience errors on variable reassignment. There is an issue already created for this.
#### `grunt jshint`

### Requirements (other than node)
#### Redis
Installation instructions for Ubuntu 14.04 [here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis).

## Changes to Hackathon
### Redis
#### I implemented Redis in favor of MongoDB as a session provider.

### Testing
#### I'm changing this project over to Jasmine because I've had more success testing React components with Jasmine.

### Additions
* Jsdoc
* jshint (not configured and still experiencing some es6 bugs, in particular reassignment errors which don't seem like reassignments to me)

## Roadmap
### OrientDB replacing MongoDB
### Implement Bower when more client libraries are required
### Falcor
#### folder `server` contains some falcor examples which will be used in adding falcor to app

### Rewriting "hackathon-starter" server-side unit tests using Jasmine instead of Mocha.
### Many other, smaller changes see `issues` tab