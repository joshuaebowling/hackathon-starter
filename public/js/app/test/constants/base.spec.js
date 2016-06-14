var constants = require('../../constants/base');

describe('base constants', () => {
  beforeAll(() => {});
  beforeEach(() => {});
  afterEach(() => {});

  it('should have expected propertes', () => {
    expect(constants).toBeObject();
    expect(constants).toHaveString('REQUEST');
    expect(constants).toHaveString('RESPONSE');
    expect(constants).toHaveString('ERROR');
  });
});
