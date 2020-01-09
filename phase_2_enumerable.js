const NUMS = [1, 2, 3, 4, 5];

Array.prototype.myEach = function(fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i]);
  }
};

// NUMS.myEach(num => {
//   console.log(`square of ${num} if ${num * num}`);
// });

Array.prototype.myMap = function(fn) {
  let mapped = [];
  this.myEach(el => mapped.push(fn(el)));

  return mapped;
};

console.log(NUMS.myMap(num => num * num));

Array.prototype.myReduce = function(fn, initValue) {
  let arr = this;
  if (!initValue) {
    initValue = arr[0];
    console.log('init: ', initValue);
    arr = arr.slice(1);
    console.log('arr: ', arr);
  }

  let result = initValue;

  arr.myEach(el => (result = fn(result, el)));

  return result;
};
console.log(NUMS.myReduce((total, item) => total + item));
