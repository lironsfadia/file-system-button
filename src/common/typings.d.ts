export interface ConfirmationDialogProps {
  message: string
  onConfirm: () => void
  onDismiss: () => void
  open: boolean
  title: string
}

export interface ConfirmationDialogProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface dialogConfigProps {
  actionCallback: (value: boolean) => void | null
  message: string
  title: string
}

export interface ShowDialogButtonProps {
  data: Array<{
    title: string
    body: Array<{ approve: string; when: 'string' }>
  }>
  getDataHandler: () => void
  id: number
  isLoading: boolean
  title: string
}

export interface GroupProps {
  title: string
  status: string | undefined
}

export interface GroupMemberProps {
  name: string
  approvalStatus: string
}
