var channel;

describe('Test base Channel', () => {
  before(function() {
    channel = require('../../channels/baseChannel');
  });

  it('should have expected propertes', () => {
    channel.should.be.an.Object;
    channel.should.have.property('channel');
    channel.should.have.property('publish');
    channel.should.have.property('subscribe');
    channel.channel.should.be.a.String;
    channel.publish.should.be.a.Function;
    channel.subscribe.should.be.a.Function;
    channel.channel.should.eql('app');
  });

});