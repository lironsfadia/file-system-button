import React, { useCallback, useState } from 'react'

import { GENERAL_DIALOG_NAME } from '../../../common/consts'
import { getMappedData } from '../../../common/helpers'
import { getData } from '../../../common/restHelper'
import { GroupMember } from '../../../common/typings'
import ShowDialogButton from '../components/ShowDialogButton'

export default function ShowDialogButtonContainer() {
  const [rootsData, setRootsData] = useState<GroupMember[] | unknown>([])
  const [siblingsData, setSiblingsData] = useState<{
    [key: string]: GroupMember[] | unknown[]
  }>({})
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const updateGroupsData = useCallback(
    async (groupName?: string) => {
      try {
        const data = await getData(1000)
        const mappedData = getMappedData(data as unknown[])

        if (groupName) {
          const newData = {
            ...siblingsData,
            [groupName]: mappedData,
          }
          setSiblingsData(newData)
        } else {
          setRootsData(mappedData)
        }
      } catch (error) {
        setError(error as string)
      } finally {
        setIsLoading(false)
      }
    },
    [siblingsData]
  )

  const handleGroupData = useCallback(() => {
    setIsLoading(true)
    updateGroupsData()
  }, [updateGroupsData])

  const handleGroupMembersData = useCallback(
    (groupName: string) => {
      setIsLoading(true)
      updateGroupsData(groupName)
    },
    [updateGroupsData]
  )

  const handleCleanup = useCallback((groupName: string) => {
    setSiblingsData(({ [groupName]: toDelete, ...rest }) => rest)
  }, [])

  return (
    <>
      {
        <ShowDialogButton
          cleanupHandler={handleCleanup}
          getMemberDataHandler={handleGroupMembersData}
          getDataHandler={handleGroupData}
          id={GENERAL_DIALOG_NAME}
          isLoading={isLoading}
          roots={rootsData as GroupMember[]}
          title={GENERAL_DIALOG_NAME}
          siblings={
            siblingsData as {
              [groupName: string]: GroupMember[]
            }
          }
        />
      }
    </>
  )
}
