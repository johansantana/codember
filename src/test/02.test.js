import { test } from 'node:test'
import assert from 'node:assert'
import { decodeASCII } from '../02/index.js'

test('Test 01', () => {
  assert.strictEqual(decodeASCII('109105100117'), 'midu')
})

test('Test 02', () => {
  assert.strictEqual(decodeASCII('9911110010110998101114'), 'codember')
})

test('Test 03', () => {
  assert.strictEqual(
    decodeASCII('9911110010110998101114 109105100117'),
    'codember midu'
  )
})

test('Test 04', () => {
  assert.strictEqual(
    decodeASCII('11210897121 116101116114105115'),
    'play tetris'
  )
})
