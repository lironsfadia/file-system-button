import React, { createContext, ReactChild, ReactChildren, ReactNode, useState } from 'react'

import { ConfirmationDialogProviderProps, dialogConfigProps } from '../../common/typings'
import ConfirmationDialog from './components/ConfirmationDialog'

export const ConfirmationDialogContext = createContext({
  openDialog: ({}) => {},
})

export default function ConfirmationDialogProvider({
  children,
}: ConfirmationDialogProviderProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogConfig, setDialogConfig] = useState<dialogConfigProps>({
    title: '',
    message: '',
    actionCallback: () => {},
  })

  const openDialog = ({
    title,
    message,
    actionCallback,
  }: dialogConfigProps) => {
    setDialogOpen(true)
    setDialogConfig({ title, message, actionCallback })
  }

  const resetDialog = () => {
    setDialogOpen(false)
    setDialogConfig({ title: '', message: '', actionCallback: () => {} })
  }

  const onConfirm = () => {
    resetDialog()
    dialogConfig.actionCallback(true)
  }

  const onDismiss = () => {
    resetDialog()
    dialogConfig.actionCallback(false)
  }
  return (
    <ConfirmationDialogContext.Provider value={{ openDialog } as any}>
      <ConfirmationDialog
        open={dialogOpen}
        title={dialogConfig.title}
        message={dialogConfig.message}
        onConfirm={onConfirm}
        onDismiss={onDismiss}
      />
      {children}
    </ConfirmationDialogContext.Provider>
  )
}
