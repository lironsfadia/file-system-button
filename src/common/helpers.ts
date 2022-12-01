export function getRandomPair(start: number, end: number) {
  let first, second
  first = Math.floor(Math.random() * end) + start
  second = Math.floor(Math.random() * end) + first
  return [first, second]
}
