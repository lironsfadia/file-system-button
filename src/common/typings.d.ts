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
  groups: Array<GroupMember>
  members: {
    [title: string]: GroupMember[]
  }
  getDataHandler: () => void
  fetchGroupMembersHandler: (groupName: string) => void
  cleanupHandler: (groupName: string) => void
  id: number
  isLoading: boolean
  title: string
}

export interface Group {
  groupName: string
  status: string
}

export interface GroupMember {
  title: string
  subtitle: string
  image: any
  isDir: boolean
  children: Array<GroupMember>
}

export interface GroupProps {
  title: string | undefined
  subtitle: string | undefined
  openHandler: (e) => void
  closeHandler: (e) => void
}

export interface GroupMemberProps {
  title: string | undefined
  subtitle: string | undefined
  image: any
}
