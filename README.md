# JavaScript Silent Division by Zero Bug

This repository demonstrates a subtle bug in JavaScript related to division by zero. The provided code doesn't handle division by zero explicitly, leading to `Infinity` being returned instead of an error or `NaN`. The solution shows how to handle this potential error more gracefully.

## Bug
The `foo` function in `bug.js` demonstrates the problem. It doesn't properly address the case where the second argument (`b`) is zero.

## Solution
The `bugSolution.js` file shows a solution which explicitly checks for division by zero and returns a more informative result, such as `NaN` or throws an exception.