import { test } from 'node:test'
import assert from 'node:assert'
import { hungerGames } from '../src/05/index.js'

test('Test 01', () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const result = hungerGames(
    numbers.map((number, idx) => {
      return { name: String(number), idx }
    })
  )
  assert.strictEqual(result, '4-4')
})
