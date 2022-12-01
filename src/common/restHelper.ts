import { getRandomPair } from './helpers'

export const getData = (delay?: number) => {
  return new Promise((res, rej) =>
    setTimeout(function () {
      res([
        {
          groupName: 'US admin 1',
          status: '2 approved out of 2',
        },
        {
          groupName: 'US admin 2',
          status: '2 approved out of 2',
        },
      ])
    }, delay)
  )
}

export const getMembersData = (delay?: number) => {
  return new Promise((res, rej) =>
    setTimeout(function () {
      res(
        [
          { title: 'Nir1', subtitle: 'approved before day' },
          { title: 'Ziri2', subtitle: 'approved before year' },
          { title: 'Nir3', subtitle: 'approved before day' },
          { title: 'Ziri4', subtitle: 'approved before year' },
        ].slice(...getRandomPair(1, 6))
      )
    }, delay)
  )
}
