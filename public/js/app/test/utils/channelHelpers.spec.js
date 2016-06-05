var 
  utils = require('../../utils');

describe('Utils', () => {
  beforeAll(() => {
  });
  beforeEach(() => {});
  afterEach(() => {});
  it('should have expected propertes', () => {
    expect(utils).toHaveObject('channelHelpers');
    expect(utils.channelHelpers).toHaveMethod('extractAction');
  });
  it('should extract the action', () => {
    var result;
    result = utils.channelHelpers.extractAction('store.action.state');
    expect(result).toBeString();
    expect(result).toBe('action');
  });

});
