const deepEqual = require("../deepEqual");

test("deepEqual basic functionality", () => {
  const a = { foo: "bar", inner: [{ xy: "z" }, { ab: [1, 2, 3, 4, {}] }] };
  const b = {
    inner: [{ xy: "z" }, { ab: [1, 2, 3, 4, {}], kek: "lol" }],
    foo: "bar",
  };

  expect(deepEqual(a, b)).toBe(false);

  const c = {
    foo: "bar",
    inner: [{ kek: "lol", xy: "z" }, { ab: [1, 2, 3, 4, {}] }],
  };
  const d = {
    inner: [{ xy: "z", kek: "lol" }, { ab: [1, 2, 3, 4, {}] }],
    foo: "bar",
  };

  expect(deepEqual(c, d)).toBe(true);
});
