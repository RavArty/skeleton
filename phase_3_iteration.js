Array.prototype.bubbleSort = function() {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] > this[j]) {
        let tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
      }
    }
  }
  return this;
};

Array.prototype.bubbleSort2 = function() {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        // a crafty bit of array destructuring to avoid a temp variable
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        isSorted = false;
      }
    }
  }

  return this;
};

console.log('bubble: ', [5, 3, 4, 2, 1].bubbleSort());

String.prototype.substrings = function() {
  let substrings = [];

  for (let start = 0; start < this.length; start++) {
    for (let end = start + 1; end <= this.length; end++) {
      substrings.push(this.slice(start, end));
    }
  }

  return substrings;
};

console.log('sub: ', 'abc'.substrings());
