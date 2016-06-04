var utils;

describe('Test Utils', () => {
  before(function() {
    utils = require('../../app/utils');
  });
  it('should have expected propertes', () => {
    utils.should.have.property('channelHelpers');
    utils.channelHelpers.should.be.an.Object;
    utils.channelHelpers.should.have.property('extractAction');
    utils.channelHelpers.extractAction.should.be.a.Function;
  });
  it('should extract the action', () => {
    var result;
    result = utils.channelHelpers.extractAction('store.action.state');
    result.should.be.okay;
    result.should.be.a.String;
    result.should.eql('action');
  });
});