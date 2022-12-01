import { DIRECTORY_TYPE } from './consts'

export function getRandomPair(start: number, end: number, range: number) {
  let first, second
  first = Math.floor(Math.random() * end) + start
  second = Math.floor(Math.random() * (end - first - 1)) + first + 1
  return [first, second]
}

function getImageByType(type: string) {
  try {
    return require(`../assets/avatar/${type}-file-icon.svg`)
  } catch (err) {
    console.error(err)
  }
}

export function getMappedData(data: unknown[]) {
  return data.reduce((agg: unknown[], current) => {
    let currentValues = Object.values(current as Object)

    agg.push({
      title: currentValues[0],
      image: getImageByType(currentValues[1]),
      subtitle: currentValues[2],
      isDir: currentValues[1] === DIRECTORY_TYPE,
    })
    return agg
  }, [])
}
