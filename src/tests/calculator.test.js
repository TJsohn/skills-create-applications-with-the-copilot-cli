const test = require('node:test');
const assert = require('node:assert/strict');

const calculator = require('../calculator');

test('add returns the sum of two numbers', () => {
  assert.equal(calculator.add(2, 3), 5);
  assert.equal(calculator.add(-4, 9), 5);
  assert.equal(calculator.add(1.5, 2.25), 3.75);
});

test('subtract returns the difference of two numbers', () => {
  assert.equal(calculator.subtract(10, 4), 6);
  assert.equal(calculator.subtract(5, 8), -3);
  assert.equal(calculator.subtract(7.5, 2.25), 5.25);
});

test('multiply returns the product of two numbers', () => {
  assert.equal(calculator.multiply(45, 2), 90);
  assert.equal(calculator.multiply(-3, 6), -18);
  assert.equal(calculator.multiply(2.5, 4), 10);
});

test('divide returns the quotient of two numbers', () => {
  assert.equal(calculator.divide(20, 5), 4);
  assert.equal(calculator.divide(9, 2), 4.5);
  assert.equal(calculator.divide(-12, 3), -4);
});

test('divide throws on division by zero', () => {
  assert.throws(() => calculator.divide(10, 0), /Division by zero is not allowed\./);
});

test('modulo returns the remainder of two numbers', () => {
  assert.equal(calculator.modulo(10, 3), 1);
  assert.equal(calculator.modulo(20, 5), 0);
  assert.equal(calculator.modulo(-10, 3), -1);
});

test('power returns a number raised to an exponent', () => {
  assert.equal(calculator.power(2, 3), 8);
  assert.equal(calculator.power(5, 0), 1);
  assert.equal(calculator.power(9, 0.5), 3);
});

test('squareRoot returns the square root of a number', () => {
  assert.equal(calculator.squareRoot(25), 5);
  assert.equal(calculator.squareRoot(2), Math.sqrt(2));
  assert.equal(calculator.squareRoot(0), 0);
});

test('squareRoot throws on negative numbers', () => {
  assert.throws(() => calculator.squareRoot(-1), /Square root of a negative number is not allowed\./);
});

test('calculate supports all four basic operations', () => {
  assert.equal(calculator.calculate(2, '+', 3), 5);
  assert.equal(calculator.calculate(10, '-', 4), 6);
  assert.equal(calculator.calculate(45, '*', 2), 90);
  assert.equal(calculator.calculate(20, '/', 5), 4);
});

test('calculate supports modulo, power, and square root operations', () => {
  assert.equal(calculator.calculate(10, '%', 3), 1);
  assert.equal(calculator.calculate(2, '^', 3), 8);
  assert.equal(calculator.calculate(25, 'sqrt'), 5);
  assert.equal(calculator.calculate(16, '√'), 4);
});

test('calculate accepts numeric strings', () => {
  assert.equal(calculator.calculate('7', '+', '8'), 15);
  assert.equal(calculator.calculate('18', '/', '3'), 6);
  assert.equal(calculator.calculate('10', 'modulo', '3'), 1);
  assert.equal(calculator.calculate('2', 'power', '4'), 16);
  assert.equal(calculator.calculate('49', 'squareRoot'), 7);
  assert.equal(calculator.calculate('16', '√'), 4);
});

test('calculate throws on invalid operands', () => {
  assert.throws(() => calculator.calculate('a', '+', 1), /Both operands must be valid numbers\./);
});

test('calculate throws on unsupported operations', () => {
  assert.throws(() => calculator.calculate(1, 'foo', 2), /Unsupported operation: foo/);
});

test('calculate throws on division by zero', () => {
  assert.throws(() => calculator.calculate(20, '/', 0), /Division by zero is not allowed\./);
});

test('calculate throws on square root of negative numbers', () => {
  assert.throws(() => calculator.calculate(-9, 'sqrt'), /Square root of a negative number is not allowed\./);
});
