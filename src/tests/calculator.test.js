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

test('calculate supports all four basic operations', () => {
  assert.equal(calculator.calculate(2, '+', 3), 5);
  assert.equal(calculator.calculate(10, '-', 4), 6);
  assert.equal(calculator.calculate(45, '*', 2), 90);
  assert.equal(calculator.calculate(20, '/', 5), 4);
});

test('calculate accepts numeric strings', () => {
  assert.equal(calculator.calculate('7', '+', '8'), 15);
  assert.equal(calculator.calculate('18', '/', '3'), 6);
});

test('calculate throws on invalid operands', () => {
  assert.throws(() => calculator.calculate('a', '+', 1), /Both operands must be valid numbers\./);
});

test('calculate throws on unsupported operations', () => {
  assert.throws(() => calculator.calculate(1, '%', 2), /Unsupported operation: %/);
});

test('calculate throws on division by zero', () => {
  assert.throws(() => calculator.calculate(20, '/', 0), /Division by zero is not allowed\./);
});
