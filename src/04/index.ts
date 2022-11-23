const passwords = []

export const isValidPass = (n: number): boolean => {
  if (!String(n).includes('55')) return false

  let result = true
  String(n)
    .split('')
    .forEach((x, idx) => {
      if (Number(x) > Number(String(n)[idx + 1])) {
        result = false
        return
      }
    })
  return result
}

for (let i = 11098; i <= 98123; i++) {
  if (isValidPass(i)) passwords.push(i)
}

export const result = `${passwords.length}-${passwords[55]}`
console.log({ result })
