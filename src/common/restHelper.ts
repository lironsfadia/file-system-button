import { getRandomPair } from './helpers'

export const getData = (delay: number) => {
  return new Promise((res, rej) =>
    setTimeout(function () {
      res([
        { name: 'file1', type: 'png', size: '10MB' },
        { name: 'file2', type: 'doc', size: '4KB' },
        { name: 'file3', type: 'jpg', size: '6MB' },
        { name: 'file4', type: 'dir', size: '1MB' },
        { name: 'file5', type: 'png', size: '7MB' },
        { name: 'file6', type: 'png', size: '78MB' },
        { name: 'file7', type: 'jpg', size: '0MB' },
        { name: 'file8', type: 'dir', size: '9MB' },
      ])
    }, delay)
  )
}
