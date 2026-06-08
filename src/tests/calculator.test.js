const test = require('node:test');
const assert = require('node:assert/strict');

const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate,
} = require('../calculator');

test('add returns sum', () => {
  assert.equal(add(2, 3), 5);
});

test('subtract returns difference', () => {
  assert.equal(subtract(10, 4), 6);
});

test('multiply returns product', () => {
  assert.equal(multiply(45, 2), 90);
});

test('divide returns quotient', () => {
  assert.equal(divide(20, 5), 4);
});

test('modulo returns remainder', () => {
  assert.equal(modulo(10, 3), 1);
});

test('power returns exponentiation result', () => {
  assert.equal(power(2, 4), 16);
});

test('square root returns square root value', () => {
  assert.equal(squareRoot(49), 7);
});

test('divide throws on division by zero', () => {
  assert.throws(() => divide(8, 0), /Division by zero/);
});

test('modulo throws on modulo by zero', () => {
  assert.throws(() => modulo(8, 0), /Modulo by zero/);
});

test('square root throws for negative numbers', () => {
  assert.throws(() => squareRoot(-1), /negative numbers/);
});

test('calculate supports all binary operators', () => {
  assert.equal(calculate(2, '+', 3), 5);
  assert.equal(calculate(10, '-', 4), 6);
  assert.equal(calculate(7, '*', 6), 42);
  assert.equal(calculate(20, '/', 5), 4);
  assert.equal(calculate(10, '%', 3), 1);
  assert.equal(calculate(3, '^', 3), 27);
});

test('calculate supports square root operator', () => {
  assert.equal(calculate(25, 'sqrt'), 5);
});

test('calculate accepts numeric strings', () => {
  assert.equal(calculate('9', '%', '4'), 1);
  assert.equal(calculate('2', '^', '5'), 32);
  assert.equal(calculate('81', 'sqrt'), 9);
});

test('calculate throws for invalid operands', () => {
  assert.throws(() => calculate('abc', '+', 3), /valid number/);
  assert.throws(() => calculate(3, '^', 'xyz'), /valid number/);
});

test('calculate throws for unsupported operators', () => {
  assert.throws(() => calculate(2, 'x', 3), /Unsupported operator/);
});
