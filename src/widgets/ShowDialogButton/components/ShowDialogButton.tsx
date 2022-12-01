import LoadingButton from '@mui/lab/LoadingButton'
import { Accordion } from '@mui/material'
import React, { useEffect } from 'react'

import { ShowDialogButtonProps } from '../../../common/typings'
import useConfirmationDialog from '../useConfirmationDialog'
import Group from './Group'
import GroupMember from './GroupMember'

function ShowDialogButton({
  id,
  title,
  groups,
  members,
  isLoading,
  fetchGroupMembersHandler,
  getDataHandler,
}: ShowDialogButtonProps) {
  const { getConfirmation } = useConfirmationDialog()
  console.log(members)

  useEffect(() => {
    if (groups) {
      const handleClick = (e: any) => {
        fetchGroupMembersHandler()
      }

      const onClick = async () => {
        const confirmed = await getConfirmation({
          title: title,
          message: groups.map((value) => (
            <Accordion>
              <Group
                title={value.groupName}
                subtitle={value.status}
                clickHandler={handleClick}
              />
              {members.map((value) => (
                <GroupMember subtitle={value.subtitle} title={value.title} />
              ))}
            </Accordion>
          )),
        })

        if (confirmed) alert('OK')
      }
      onClick()
    }
  }, [groups, members, title])

  return (
    <LoadingButton
      loading={isLoading}
      loadingPosition="center"
      variant="outlined"
      onClick={getDataHandler}
    >
      {isLoading ? '' : title}
    </LoadingButton>
  )
}

export default ShowDialogButton
