function foo(a, b) {
  if (a === 0) {
    return 0;
  }
  if (b === 0) {
    return 0;
  }
  return a / b;
}

console.log(foo(1, 0)); // Infinity
console.log(foo(0, 1)); // 0
console.log(foo(0, 0)); // 0