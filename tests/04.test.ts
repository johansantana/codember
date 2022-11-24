import { test } from 'node:test'
import assert from 'node:assert'
import { isValidPass } from '../src/04/index.js'

test('Test 01', () => {
  const password = 55678
  assert.strictEqual(isValidPass(password), true)
})

test('Test 02', () => {
  const password = 12555
  assert.strictEqual(isValidPass(password), true)
})

test('Test 02', () => {
  const password = 55555
  assert.strictEqual(isValidPass(password), true)
})

test('Test 02', () => {
  const password = 12345
  assert.strictEqual(isValidPass(password), false)
})

test('Test 02', () => {
  const password = 57775
  assert.strictEqual(isValidPass(password), false)
})
