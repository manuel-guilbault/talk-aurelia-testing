import { UppercaseValueConverter } from '../../../../src/resources/value-converters/upper-case';

describe('upper-case value converter', () => {

  let sut: UppercaseValueConverter;

  beforeEach(() => {
    sut = new UppercaseValueConverter();
  });

  it('should upper-case value when converting to view', () => {
    const result = sut.toView('abc');
    expect(result).toEqual('ABC');
  });
});
