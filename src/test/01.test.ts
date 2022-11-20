import { test } from 'node:test'
import assert from 'node:assert'
import { parseUsers, isValidUser } from '../01/index.js'

test('Test 01', () => {
  const user = 'usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82'
  const parsedUser = parseUsers(user)
  assert.strictEqual(isValidUser(parsedUser[0]), true)
})

test('Test 02', () => {
  const user =
    'fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World'
  const parsedUser = parseUsers(user)
  assert.strictEqual(isValidUser(parsedUser[0]), true)
})

test('Test 03', () => {
  const user = 'psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com'
  const parsedUser = parseUsers(user)
  assert.strictEqual(isValidUser(parsedUser[0]), false)
})

test('Test 04', () => {
  const user = 'usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com'
  const parsedUser = parseUsers(user)
  assert.strictEqual(isValidUser(parsedUser[0]), true)
})
