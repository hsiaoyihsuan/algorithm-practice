// 0, 1, 1, 2, 3, 5, 8, 13, 21;
// fibonacci(0) => 0
// fibonacci(1) => 1
// fibonacci(2) => 1
// fibonacci(3) => 2
// ------- recursion version
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(4));

// ------- loop version

function fibonacciIterative(n) {
  if (n <= 1) return n;

  let a = 0,
    b = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b;
}

console.log(fibonacciIterative(0));
console.log(fibonacciIterative(1));
console.log(fibonacciIterative(2));
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(4));
