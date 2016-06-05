var 
channel = require('../../channels').numerology,
postal = require('postal'),
React = require('react'),
TestUtils = require('react/lib/ReactTestUtils');

describe('Numerology Channel', () => {
  beforeAll(() => {
  });
  beforeEach(() => {});
  afterEach(() => {});

  it('should have expected propertes', () => {
    expect(channel).toBeObject();
    expect(channel).toHaveObject('channel');
    expect(channel).toHaveObject('subscriptions');
    expect(channel).toHaveObject('constants');
  });

  it('should have properties to build routing strings', () => {
    expect(channel.constants).toHaveString('Base');
    expect(channel.constants).toHaveObject('ActionTypes');
    expect(channel.constants).toHaveObject('States');
    expect(channel.constants.ActionTypes).toHaveString('CALCULATE');
    expect(channel.constants.ActionTypes).toHaveString('PROCESSING');
    expect(channel.constants.ActionTypes).toHaveString('ERROR');
    expect(channel.constants.Base).toBe('numera');
  });

  it('should pubsub calculation', (done) => {
    var route, sc;

    // short cut
    sc = channel.constants;
    route = `${sc.Base}.${sc.ActionTypes.CALCULATE}.${sc.States.REQUEST}`;
    expect(route.indexOf('undefined')).toBe(-1);
    channel.channel.subscribe(route, (data) => {
      expect(data).toBeObject();
      postal.reset();
      done();
    });
    channel.channel.publish(route, {test: 'test'});
  });

});
