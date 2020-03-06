function sum(fromN, toN) {
  if (fromN - toN === 1 || toN - fromN === 1) {
    return fromN + toN;
  }

  return fromN + sum(fromN + 1, toN);
}

console.log(sum(3,7));

module.exports = sum;
