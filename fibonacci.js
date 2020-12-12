const { performance } = require('perf_hooks');

// Iterative
const fib = (n) => {
  a = [];
  a[0] = 1;
  a[1] = 1;
  for (var i = 2; i <= n - 1; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }
  return a[n - 1];
};

// Recursive with memoization
const fibRec = (n, memo = {}) => {
  if (n <= 2) return 1;
  if (n in memo) return memo[n];
  memo[n] = fibRec(n - 1, memo) + fibRec(n - 2, memo);

  return memo[n];
};

var t0 = performance.now();
console.log(fibRec(5));
console.log(fibRec(10));
console.log(fibRec(500));
//console.log(fib(500));
var t1 = performance.now();
console.log('Call to fibRec took ' + (t1 - t0) + ' milliseconds.');
