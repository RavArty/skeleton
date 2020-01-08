Array.prototype.uniq = function() {
  let hash = {};
  this.forEach((el, idx) => {
    if (!hash[el]) {
      hash[el] = idx;
    }
  });
  return Object.keys(hash);
};

console.log([1, 2, 3, 4, 4, 4, 4].uniq());
