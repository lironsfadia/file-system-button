import React, { useCallback, useState } from 'react'

import { getImageByType } from '../../../common/helpers'
import { getData } from '../../../common/restHelper'
import { Group, GroupMember } from '../../../common/typings'
import ShowDialogButton from '../components/ShowDialogButton'

export default function ShowDialogButtonContainer({ id }: { id: number }) {
  const [groupsData, setGroupsData] = useState<GroupMember[] | unknown>([])

  const [membersData, setMembersData] = useState<{
    [key: string]: GroupMember[] | unknown[]
  }>({})
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const updateGroupsData = useCallback(
    async (groupName?: string) => {
      try {
        const data = await getData(1000)

        const mappedData = (data as Array<unknown>).reduce(
          (agg: Array<unknown>, current) => {
            let currentValues = Object.values(current as Object)
            agg.push({
              title: currentValues[0],
              image: getImageByType(currentValues[1]),
              subtitle: currentValues[2],
              isDir: currentValues[1] === 'dir',
            })
            return agg
          },
          []
        )

        if (groupName) {
          const newData = {
            ...membersData,
            [groupName]: mappedData,
          }
          setMembersData(newData)
        } else {
          setGroupsData(mappedData)
        }
      } catch (error: unknown) {
        setError(error as string)
      }
    },
    [membersData]
  )

  const handleGroupData = useCallback(() => {
    setIsLoading(true)
    updateGroupsData()
  }, [])

  const handleGroupMembersData = useCallback((groupName: string) => {
    updateGroupsData(groupName)
  }, [])

  const handleCleanup = useCallback((groupName: string) => {
    setMembersData(({ [groupName]: toDelete, ...rest }) => rest)
  }, [])

  return (
    <>
      {
        <ShowDialogButton
          id={id}
          title={'My Computer'}
          groups={groupsData as GroupMember[]}
          members={
            membersData as {
              [groupName: string]: GroupMember[]
            }
          }
          isLoading={isLoading}
          getDataHandler={handleGroupData}
          fetchGroupMembersHandler={handleGroupMembersData}
          cleanupHandler={handleCleanup}
        />
      }
    </>
  )
}
