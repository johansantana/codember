const passwords = []

export const isValidPass = (n: number): boolean => {
  const string = n.toString()
  if (!string.includes('55')) return false

  for (let i = 0; i < string.length; i++) {
    if (string[i] > string[i + 1]) return false
  }
  return true
}

for (let i = 11155; i <= 55999; i++) {
  if (isValidPass(i)) passwords.push(i)
}

export const result = `${passwords.length}-${passwords[55]}`
console.log({ result })
