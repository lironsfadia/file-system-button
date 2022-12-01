import { useContext } from 'react'

import { ConfirmationDialogContext } from '../ConfirmationDialog/ConfirmationDialogProvider'

export default function useConfirmationDialog() {
  const { openDialog } = useContext(ConfirmationDialogContext)

  const getConfirmation = ({ ...options }) =>
    new Promise((res, rej) => {
      if (openDialog) {
        openDialog({ actionCallback: res, ...options })
      } else {
        rej("openDialog function can't be null.")
      }
    })

  return { getConfirmation }
}
