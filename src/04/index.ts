const passwords = []

export const isValidPass = (n: number): boolean => {
  const matches = String(n).match(/5/g)
  if (String(n).length !== 5 || !matches || matches.length < 2) return false

  for (let i = 0; i <= String(n).length; i++) {
    const currentDigit = String(n)[i]
    if (Number(currentDigit) > Number(String(n)[i + 1])) return false
  }
  return true
}

for (let i = 11098; i <= 98123; i++) {
  if (isValidPass(i)) passwords.push(i)
}

const result = `${passwords.length}-${passwords[55]}`
console.log({ result })
