import { readFileSync } from 'fs'

const getColors = (): string[] =>
  JSON.parse(readFileSync(new URL('colors.json', import.meta.url), 'utf8'))

export const findLargestZebra = (colorList: string[]): [number, string] => {
  let largest = []
  let current = []

  for (let i = 0; i < colorList.length; i++) {
    const color = colorList[i]
    const last = colorList[i - 1]
    const next = colorList[i + 1]

    if (color === next || color === current.at(-1)) continue
    if (next && last !== next) {
      color === colorList[i - 2] ? current.push(color) : (current = [color])
    } else if (current.length < 2 || color === colorList[i - 2])
      current.push(color)
    if (current.length >= largest.length) largest = [...current]
  }

  return [largest.length, largest.at(-1)]
}

const colors = getColors()
export const result = findLargestZebra(colors).join('@')
console.log({ result })
