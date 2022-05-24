const { map, reduce, filter } = require("../collections");

const arr = [1, 2, 3, 4, 5];

test("map basic functionality", () => {
  const result = map(arr, (item, index) => item + index);
  expect(result).toStrictEqual([1, 3, 5, 7, 9]);
});

test("reduce basic functionality", () => {
  const result = reduce(arr, (acc, curr) => acc + curr, 0);
  expect(result).toBe(15);
});

test("filter basics", () => {
  const result = filter(arr, (item) => item % 2 === 0);
  expect(result).toStrictEqual([2, 4]);
});
