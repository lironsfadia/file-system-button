import React, { useCallback, useState } from 'react'

import { getData, getMembersData } from '../../../common/restHelper'
import { Group, GroupMember } from '../../../common/typings'
import ShowDialogButton from '../components/ShowDialogButton'

export default function ShowDialogButtonContainer({ id }: { id: number }) {
  const [groupsData, setGroupsData] = useState<unknown | Array<Group>>([])

  const [membersData, setMembersData] = useState<unknown | Array<GroupMember>>(
    []
  )
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const updateGroupsData = async () => {
    try {
      const data = await getData(1000)

      setGroupsData(data)
    } catch (error: unknown) {
      setError(error as string)
    } finally {
      setIsLoading(false)
    }
  }

  const updateGroupMembersData = async () => {
    try {
      const data = await getMembersData(1000)
      setMembersData(data)
    } catch (error: unknown) {
      setError(error as string)
    }
  }

  const handleGroupData = useCallback(() => {
    setIsLoading(true)
    updateGroupsData()
  }, [])

  const handleGroupMembersData = useCallback(() => {
    updateGroupMembersData()
  }, [])

  console.log(membersData)

  return (
    <>
      {
        <ShowDialogButton
          id={id}
          title={`Security Policy ${id}`}
          groups={groupsData as Group[]}
          members={membersData as GroupMember[]}
          isLoading={isLoading}
          getDataHandler={handleGroupData}
          fetchGroupMembersHandler={handleGroupMembersData}
        />
      }
    </>
  )
}
