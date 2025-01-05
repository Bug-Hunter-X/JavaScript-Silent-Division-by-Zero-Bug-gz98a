function foo(a, b) {
  if (a === 0 || b === 0) {
    return NaN; // Or throw new Error('Division by zero');
  }
  return a / b;
}

console.log(foo(1, 0)); // NaN
console.log(foo(0, 1)); // 0
console.log(foo(0, 0)); // NaN