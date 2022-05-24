const curry = require('../curry');

test('basic curry functionality', () => {
  const sum = (a, b, c) => a + b + c;
  const curried = curry(sum);
  expect(curried(1)(2)(3)).toBe(6);
});
