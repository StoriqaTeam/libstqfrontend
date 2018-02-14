import notEmpty from './notEmpty';

describe('notEmpty', () => {
  it('should work for Strings', () => {
    expect(notEmpty('')).toEqual(false);
    expect(notEmpty('a')).toBe(true);
  });

  it('should work for Arrays', () => {
    expect(notEmpty([])).toBe(false);
    expect(notEmpty(['a'])).toBe(true);
  });

  it('returns false for others types', () => {
    expect(notEmpty(1)).toBe(false);
  })
});
