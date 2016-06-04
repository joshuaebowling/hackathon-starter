var constants;

describe('Test base constants', () => {
  before(function() {
    channel = require('../../app/constants').base;
  });

  it('should have expected propertes', () => {
    channel.should.be.an.Object;
    channel.should.have.property('REQUEST');
    channel.should.have.property('RESPONSE');
    channel.should.have.property('ERROR');
    channel.REQUEST.should.be.a.String;
    channel.RESPONSE.should.be.a.String;
    channel.ERROR.should.be.a.String;
  });

});