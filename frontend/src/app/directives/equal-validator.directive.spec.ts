import { EqualValidatorDirective } from './equal-validator.directive';

describe('EqualValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new EqualValidatorDirective("asd","asd");
    expect(directive).toBeTruthy();
  });
});
