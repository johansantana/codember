import { readFileSync } from 'fs'

const getPlayers = (): string[] =>
  JSON.parse(readFileSync(new URL('mecenas.json', import.meta.url), 'utf8'))

export const hungerGames = (players: { name: string; idx: number }[]) => {
  for (let i = 0; i < players.length; i++) {
    if (i === players.length - 1) players.shift()
    else players.splice(i + 1, 1)
  }

  if (players.length > 1) return hungerGames(players)
  return `${players[0].name}-${players[0].idx}`
}

const players = getPlayers().map((el, idx) => ({ name: el, idx }))
export const result = hungerGames(players)

console.log({ result })
