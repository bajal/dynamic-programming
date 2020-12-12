// Element of array can be used as many times as needed
// All numbers are non-negative
// canSum(targetSum, numbers) -> Should return a boolean that says whether the sum can be achieved

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [3, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(7, [3, 4]));
console.log(canSum(8, [3, 9]));
console.log(canSum(300, [7, 15]));
