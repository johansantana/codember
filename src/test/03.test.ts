import { test } from 'node:test'
import assert from 'node:assert'
import { findLargestZebra } from '../03/index.js'

let colors = []

test('Test 01', () => {
  colors = findLargestZebra(['red', 'blue', 'red', 'blue', 'green'])
  assert.deepEqual(colors, [4, 'blue'], `Test 01 should return [4, 'blue']`)
})

test('Test 02', () => {
  colors = findLargestZebra(['green', 'red', 'blue', 'gray'])
  assert.deepEqual(colors, [2, 'gray'], "Test 02 should return [2, 'gray']")
})

test('Test 03', () => {
  colors = findLargestZebra(['blue', 'blue', 'blue', 'blue'])
  assert.deepEqual(colors, [1, 'blue'], "Test 03 should return [1, 'blue']")
})

test('Test 04', () => {
  colors = findLargestZebra(['red', 'green', 'red', 'green', 'red', 'green'])
  assert.deepEqual(colors, [6, 'green'], "Test 04 should return [6, 'green']")
})

test('Test 05', () => {
  colors = findLargestZebra(['blue', 'red', 'blue', 'red', 'gray'])
  assert.deepEqual(colors, [4, 'red'], "Test 05 should return [4, 'red']")
})

test('Test 06', () => {
  colors = findLargestZebra([
    'red',
    'red',
    'blue',
    'red',
    'red',
    'red',
    'green'
  ])
  assert.deepEqual(colors, [3, 'red'], "Test 06 should return [3, 'red']")
})

test('Test 07', () => {
  colors = findLargestZebra([
    'red',
    'blue',
    'red',
    'green',
    'red',
    'green',
    'red',
    'green'
  ])
  assert.deepEqual(colors, [6, 'green'], "Test 07 should return [6, 'green']")
})
