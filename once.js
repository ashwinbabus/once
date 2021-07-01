let once = (func) => {
  if (typeof func !== "function") throw new TypeError("Expected a function");
  let count = 1;
  let res;
  return function (...args) {
    if (count-- > 0) {
      res = func.apply(this, args);
    }
    return res;
  };
};

let add = (a, b) => {
  return a + b;
};

let addonce = once(add);
console.log(addonce(1, 2)); // 3
console.log(addonce(2, 2)); // 3
console.log(addonce(3, 2)); // 3
console.log(addonce(3, 5)); // 3
