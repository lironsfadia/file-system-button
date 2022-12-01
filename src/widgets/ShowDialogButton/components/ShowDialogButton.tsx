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
  cleanupHandler,
  getDataHandler,
}: ShowDialogButtonProps) {
  const { getConfirmation } = useConfirmationDialog()

  useEffect(() => {
    if (groups) {
      const handleClick = (groupName: string) => {
        fetchGroupMembersHandler(groupName)
      }

      const handleCleanup = (groupName: string) => {
        cleanupHandler(groupName)
      }

      console.log(groups)

      const onClick = async () => {
        const confirmed = await getConfirmation({
          title: title,
          message: groups.map((value) =>
            value.isDir ? (
              <Accordion>
                <Group
                  title={value.title}
                  subtitle={value.subtitle}
                  openHandler={handleClick}
                  closeHandler={handleCleanup}
                />
                {(members[value.title] || []).map(
                  ({ title, subtitle, image }) => (
                    <GroupMember
                      subtitle={subtitle}
                      title={title}
                      image={image}
                    />
                  )
                )}
              </Accordion>
            ) : (
              <GroupMember
                title={value.title}
                subtitle={value.subtitle}
                image={value.image}
              />
            )
          ),
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
