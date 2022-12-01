import LoadingButton from '@mui/lab/LoadingButton'
import React, { useEffect } from 'react'

import { CONFIRMATION_MESSAGE } from '../../../common/consts'
import { ShowDialogButtonProps } from '../../../common/typings'
import useConfirmationDialog from '../useConfirmationDialog'
import GroupBuilder from './GroupBuilder'
import GroupMember from './GroupMember'

function ShowDialogButton({
  cleanupHandler,
  getDataHandler,
  getMemberDataHandler,
  id,
  isLoading,
  roots,
  siblings,
  title,
}: ShowDialogButtonProps) {
  const { getConfirmation } = useConfirmationDialog()

  useEffect(() => {
    if (roots) {
      const handleClick = (groupName: string) => {
        getMemberDataHandler(groupName)
      }

      const handleCleanup = (groupName: string) => {
        cleanupHandler(groupName)
      }

      const onClick = async () => {
        const confirmed = await getConfirmation({
          title: title,
          message: roots.map((root) =>
            root.isDir ? (
              <GroupBuilder
                parent={root}
                siblings={siblings}
                handleCleanup={handleCleanup}
                handleClick={handleClick}
              />
            ) : (
              <GroupMember
                title={root.title}
                subtitle={root.subtitle}
                image={root.image}
              />
            )
          ),
        })

        if (confirmed) alert(CONFIRMATION_MESSAGE)
      }

      if (roots.length > 0) onClick()
    }
  }, [roots, siblings, title])

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
