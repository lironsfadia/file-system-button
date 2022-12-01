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
  cleanupHandler: (groupName: string) => void
  getMemberDataHandler: (groupName: string) => void
  getDataHandler: () => void
  roots: Array<GroupMember>
  id: string
  isLoading: boolean
  siblings: siblings
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
  image: any
  title: string | undefined
  subtitle: string | undefined
  openHandler: (e) => void
  closeHandler: (e) => void
}

export interface GroupMemberProps {
  isRoot?: boolean
  title: string | undefined
  subtitle: string | undefined
  image: any
}

export interface GroupBuilderProps {
  parent: GroupMember
  siblings: {
    [groupName: string]: GroupMember[]
  }

  handleClick: (e) => void
  handleCleanup: (e) => void
  children?: any
}
