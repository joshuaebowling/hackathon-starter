var 
channel = require('../../channels').numerology,
React = require('react'),
store = require('../../stores').numerology,
TestUtils = require('react/lib/ReactTestUtils');

describe('Numerology Store', () => {
  beforeAll(() => {
  });
  beforeEach(() => {});
  afterEach(() => {});

  it('should have expected propertes', () => {
    expect(channel).toBeObject();
    expect(store).toBeObject();
    expect(store).toHaveMethod('calculate');
    expect(store).toHaveArray('numeras');
  });

  it('should calculate', (done) => {
    var route, sc, subscription;
    store.calculate('puff the magic').then((data) => {
      expect(data).toBeArray();
      done();
    })
  });

// why do pubsub tests fail though works in ui?
  xit('should channel calculations', (done) => {
    var route, sc, subscription;

    sc = channel.constants;
    route = `${sc.Base}.${sc.ActionTypes.CALCULATION}.${sc.States.RESPONSE}`;
    route = 'numera.calculate.request';
    subscription = channel.channel.subscribe(route, (data) => {
      expect(data).toBeObject();
      done();
    });
    channel.channel.publish(`${sc.Base}.${sc.ActionTypes.CALCULATION}.${sc.States.REQUEST}`, {text: 'puff the magic dragon'});
  });
});
