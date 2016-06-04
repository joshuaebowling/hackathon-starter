var channel, store;

describe('Test Numerology Store', () => {
  before(function() {
    store = require('../../javascripts/src/stores').numerology;
    channel = require('../../javascripts/src/channels').numerology;
  });

  it('should have expected propertes', () => {
    store.should.have.property('calculate');
    store.calculate.should.be.an.Function;
    store.should.have.property('numeras');
    store.numeras.should.be.an.Array;
  });

  it('should calculate', (done) => {
    var route, sc, subscription;
    store.calculate('puff the magic').then((data) => { 
      done();
    })
  });

  it('should channel calculations', (done) => {
    var route, sc, subscription, wrap;
    sc = channel.constants;
    route = `${sc.Base}.${sc.ActionTypes.CALCULATION}.${sc.States.RESPONSE}`;
    route = 'numera.calculate.request';
    wrap = function() { 
      done();
    };
    subscription = channel.channel.subscribe(route, (data) => {
      data.should.be.okay;
      wrap();
    });
    channel.channel.publish(`${sc.Base}.${sc.ActionTypes.CALCULATION}.${sc.States.REQUEST}`, {text: 'puff the magic dragon'});

  });
});