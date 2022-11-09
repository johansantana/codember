export interface User {
  usr: string
  eme: string
  psw: string
  age: number
  loc: string
  fll: number
}

function validateInput(input: string): User[] {
  const usersArray: string[] = input.trim().split('\n\n')

  const result: any[] = usersArray.map(user => {
    if (!user) return
    const currentUser = user.trim().split(/[\s\n]+/)
    const parsedUser = {}

    currentUser.forEach(data => {
      const key = data.split(':')[0]
      let value: string | number = data.split(':')[1]
      if (key === 'age' || key === 'fll') value = Number(value)

      parsedUser[key] = value
    })

    return parsedUser
  })

  return result
}

function isValidUser(obj: any): boolean {
  return 'usr' in obj && 'eme' in obj && 'psw' in obj && 'age' in obj && 'loc' in obj && 'fll' in obj
}

const getResult = async (): Promise<string> => {
  try {
    const data = await fetch('https://codember.dev/users.txt').then(res => res.text())

    const users: User[] = validateInput(data)
    const validUsers: User[] = users.filter(isValidUser)
    const validCount: number = validUsers.length
    const lastValidUser: string = validUsers[validUsers.length - 1].usr

    return `${validCount}${lastValidUser}`
  } catch (err) {
    console.error(err)
  }
}

export const result: string = await getResult()
