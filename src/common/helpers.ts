export function getRandomPair(start: number, end: number, range: number) {
  let first, second
  first = Math.floor(Math.random() * end) + start
  second = Math.floor(Math.random() * (end - first - 1)) + first + 1
  return [first, second]
}

export function getImageByType(type: string) {
  try {
    return require(`../assets/avatar/${type}-file-icon.svg`)
  } catch (err) {
    console.error(err)
  }
}
