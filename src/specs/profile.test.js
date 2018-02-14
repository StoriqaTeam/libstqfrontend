import profile from './profile';
import notEmpty from '../rules/notEmpty';

describe('specs/profile', () => {
  it('should has firstName rule', () => {
    expect(profile.firstName).toEqual([[notEmpty, "Should not be empty"]]);
  })
});