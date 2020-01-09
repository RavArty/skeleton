function range(start, end) {
  if (start === end) {
    return [];
  }

  let r = range(start, end - 1);
  console.log('end: ', end - 1);
  r.push(end - 1);
  return r;
}

console.log(`range(3, 10) = ${range(3, 10)}`);

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let first = arr[0];
  let tmp = arr.slice(1);
  let r = sumRec(tmp);
  r += first;
  return r;
}

function sumRec2(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let lastNum = numbers[numbers.length - 1];
  return sumRec(numbers.slice(0, numbers.length - 1)) + lastNum;
}

console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  // if(exp === 1){
  //   return base
  // }

  return base * exponent(base, exp - 1);
}

console.log(`exp(2, 4) = ${exponent(2, 4)}`);

function fibonacci(n) {
  if (n < 3) {
    return [0, 1].slice(0, n);
  }
  let fib = fibonacci(n - 1);
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  return fib;
}

console.log(`fibonacci(5) = ${fibonacci(5)}`);

function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr;
  }
  return arr.map(el => {
    return deepDup(el);
  });
}

const array = [[2], 3];
const dupedArray = deepDup(array);
console.log(`deepDup original = ${JSON.stringify(array)}`);

dupedArray[0].push(4);

console.log(
  `deepDup original = ${JSON.stringify(array)} (should not be mutated)`
);
console.log(
  `deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`
);

function bsearch(numbers, target) {
  if (numbers.length === 0) {
    return -1;
  }

  const probeIdx = Math.floor(numbers.length / 2);
  const probe = numbers[probeIdx];

  if (target === probe) {
    return probeIdx;
  } else if (target < probe) {
    const left = numbers.slice(0, probeIdx);
    return bsearch(left, target);
  } else {
    const right = numbers.slice(probeIdx + 1);
    const subProblem = bsearch(right, target);

    return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
  }
}

console.log(`bsearch([1, 2, 3], 3) = ${bsearch([1, 2, 3], 3)}`);

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    let nextItem = left[0] < right[0] ? left.shift() : right.shift();
    merged.push(nextItem);
  }

  return merged.concat(left, right);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    return merge(left, right);
  }
}

console.log(`mergeSort([4, 5, 2, 3, 1]) = ${mergeSort([4, 5, 2, 3, 1])}`);

function subsets(array) {
  debugger;
  if (array.length === 0) {
    return [[]];
  }

  const first = array[0];
  const withoutFirst = subsets(array.slice(1));
  // remember, we don't want to mutate the subsets without the first element
  // hence, the 'concat'
  const withFirst = withoutFirst.map(sub => [first].concat(sub));

  return withoutFirst.concat(withFirst);
}

console.log(`subsets([1, 3, 5]) = ${JSON.stringify(subsets([1, 3, 5]))}`);
