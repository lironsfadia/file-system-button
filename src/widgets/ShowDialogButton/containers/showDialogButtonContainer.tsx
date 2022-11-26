import React, { useCallback, useState } from 'react'

import { getData } from '../../../common/restHelper'
import ShowDialogButton from '../components/ShowDialogButton'

export default function ShowDialogButtonContainer({ id }: { id: number }) {
  const [postsData, setPostsData] = useState([])
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const updateData = async () => {
    try {
      const resPosts = await getData(
        'https://jsonplaceholder.typicode.com/posts'
      )
      setIsLoading(false)
      setPostsData(resPosts)
    } catch (error: unknown) {
      setIsLoading(false)
      setError(error as string)
    }
  }

  const handleData = useCallback(() => {
    setIsLoading(true)
    updateData()
  }, [])

  return (
    <>
      {
        <ShowDialogButton
          id={id}
          title={`Secyrity Policy${id}`}
          data={postsData}
          isLoading={isLoading}
          getDataHandler={handleData}
        />
      }
    </>
  )
}
