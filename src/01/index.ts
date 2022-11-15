import { readFileSync } from 'fs'

const keys = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

function parseUsers(input: string): any[] {
  const resultArray = input.split('\n\n')

  return resultArray.map(user => {
    const currentUser = user.split(/[\s\n]+/)
    const parsedUser = {}

    currentUser.forEach(data => {
      let [key, value] = data.split(':')
      parsedUser[key] = value
    })

    return parsedUser
  })
}

function isValidUser(obj: any) {
  return keys.every(key => {
    return key in obj
  })
}

async function getUsers() {
  const data = readFileSync(new URL('users.txt', import.meta.url), 'utf8')
  const users = parseUsers(data).filter(isValidUser)
  const lastValidUser = users.at(-1).usr
  return `${users.length}${lastValidUser}`
}

export const result = await getUsers()
console.log({ result })
