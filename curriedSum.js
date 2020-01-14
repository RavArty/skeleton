Function.prototype.curry = function(numArgs) {
  let args = [];
  let fn = this;
  return function _curriedFn(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  };
};

Function.prototype.curry = function(numArgs) {
  let args = [];
  let fn = this;
  return function _curriedFn(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curriedFn;
    }
  };
};

Function.prototype.curry2 = function(numArgs) {
  let args = [];

  return (_curriedFn = arg => {
    args.push(arg);
    if (args.length === numArgs) {
      return this(...args);
    } else {
      return _curriedFn;
    }
  });
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1);

// or more briefly:
sumThree.curry(3)(4)(20)(6); // == 30

function curreidSum(num) {
  let numbers = [];

  function _curreidSum(el) {
    numbers.push(el);

    if (numbers.length === num) {
      let total = 0;
      numbers.forEach(el => (total += el));
      console.log(total);
    } else {
      return _curreidSum;
    }
  }
  return _curreidSum;
}
const sum = curreidSum(4);
sum(5)(30)(20)(1);
