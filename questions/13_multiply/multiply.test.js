const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('hi', 2)).toThrow();

    expect(() => multiply('hello')).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    const test1 = multiply(2,3);
    expect(test1).toBe(6);

    // test that the returned value is correct
    const test2 = multiply(2, -1);
    expect(test2).toBe(-2);

    // test some other values
    const test3 = multiply(17, 10)
    expect(test3).toBe(170);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    const testNum1 = Math.random() * 100;
    const testNum2 = Math.random() * 100;
    const testMult = multiply(testNum1, testNum2);
    const product = testNum1 * testNum2;
    expect(testMult).toBe(product);
  });
});
