var 
channel = require('../../channels/baseChannel'),
React = require('react'),
TestUtils = require('react/lib/ReactTestUtils');

describe('baseChannel', () => {
  beforeAll(() => {
  });
  beforeEach(() => {});
  afterEach(() => {});

  it('should have expected propertes', () => {
    expect(channel).toBeObject();
    expect(channel).toHaveString('channel');
    expect(channel).toHaveMethod('publish');
    expect(channel).toHaveMethod('subscribe');
  });
});
