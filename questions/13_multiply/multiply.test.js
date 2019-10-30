const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('hi', 2)).toThrow();

    expect(() => multiply('hello')).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(multiply(2,3)).toBe(6);

    // test that the returned value is correct
    expect(multiply(2, -1)).toBe(-2);

    // test some other values
    expect(multiply(17, 10)).toBe(170);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    const testNum1 = Math.random() * 100;
    const testNum2 = Math.random() * 100;
    const testMult = multiply(testNum1, testNum2)
    const product = testNum1 * testNum2;
    expect(testMult).toBe(product);
  });
});
