export interface User {
  usr: string
  eme: string
  psw: string
  age: string
  loc: string
  fll: number
}

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

function isValidUser(obj: User) {
  return 'usr' in obj && 'eme' in obj && 'psw' in obj && 'age' in obj && 'loc' in obj && 'fll' in obj
}

async function getUsers() {
  return fetch('https://codember.dev/users.txt')
    .then(res => res.text())
    .then(data => {
      const users = parseUsers(data).filter(isValidUser)
      const lastValidUser: string = users.at(-1).usr

      return `${users.length}${lastValidUser}`
    })
}

const result = await getUsers()
console.log({ result })
