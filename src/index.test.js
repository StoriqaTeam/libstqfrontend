import { specs, validate, rules } from './index';

describe('package', () => {
  it('should has valid exports', () => {
    expect(specs).toBeDefined();
    expect(validate).toBeDefined();
    // expect(rules).toBeDefined();
  });
});