var channel, postal;


describe('Test Numerology Channel', () => {
  before(function() {
    channel = require('../../channels').numerology;
    postal = require('postal');
  });

  it('should have expected propertes', () => {
    channel.should.be.an.Object;
    channel.should.have.property('channel');
    channel.should.have.property('subscriptions');
    channel.should.have.property('constants');
    channel.channel.should.be.an.Object;
    channel.subscriptions.should.be.an.Object;
  });

  it('should have properties to build routing strings', () => {
    channel.constants.should.be.an.Object;
    channel.constants.should.have.property('Base');
    channel.constants.should.have.property('ActionTypes');
    channel.constants.should.have.property('States');
    channel.constants.ActionTypes.should.be.an.Object;
    channel.constants.ActionTypes.should.have.property('CALCULATE');
    channel.constants.ActionTypes.should.have.property('PROCESSING');
    channel.constants.ActionTypes.should.have.property('ERROR');

    channel.constants.Base.should.eql('numera');
  });

  it('should pubsub calculation', (done) => {
    var route, sc;

    // short cut
    sc = channel.constants;
    route = `${sc.Base}.${sc.ActionTypes.CALCULATE}.${sc.States.REQUEST}`;
    route.indexOf('undefined').should.eql(-1);
    channel.channel.subscribe(route, (data) => {
      data.should.be.okay;
      postal.reset();
      done();
    });
    channel.channel.publish(route, {test: 'test'});
  });
});