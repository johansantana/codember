import { test } from 'node:test'
import assert from 'node:assert'
import { findLargestZebra } from '../src/03/index.js'

test('Test 01', () => {
  assert.deepEqual(
    findLargestZebra(['red', 'blue', 'red', 'blue', 'green']),
    [4, 'blue'],
    `Test 01 should return [4, 'blue']`
  )
})

test('Test 02', () => {
  assert.deepEqual(
    findLargestZebra(['green', 'red', 'blue', 'gray']),
    [2, 'gray'],
    "Test 02 should return [2, 'gray']"
  )
})

test('Test 03', () => {
  assert.deepEqual(
    findLargestZebra(['blue', 'blue', 'blue', 'blue']),
    [1, 'blue'],
    "Test 03 should return [1, 'blue']"
  )
})

test('Test 04', () => {
  assert.deepEqual(
    findLargestZebra(['red', 'green', 'red', 'green', 'red', 'green']),
    [6, 'green'],
    "Test 04 should return [6, 'green']"
  )
})

test('Test 05', () => {
  assert.deepEqual(
    findLargestZebra(['blue', 'red', 'blue', 'red', 'gray']),
    [4, 'red'],
    "Test 05 should return [4, 'red']"
  )
})

test('Test 06', () => {
  assert.deepEqual(
    findLargestZebra(['red', 'red', 'blue', 'red', 'red', 'red', 'green']),
    [3, 'red'],
    "Test 06 should return [3, 'red']"
  )
})

test('Test 07', () => {
  assert.deepEqual(
    findLargestZebra([
      'red',
      'blue',
      'red',
      'green',
      'red',
      'green',
      'red',
      'green'
    ]),
    [6, 'green'],
    "Test 07 should return [6, 'green']"
  )
})
