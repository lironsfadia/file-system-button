import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'

import { DIALOG_ACTION_TEXT } from '../../../common/consts'
import { ConfirmationDialogProps } from '../../../common/typings'

const paperStyles = {
  sx: {
    width: '100%',
    maxHeight: 800,
  },
}

export default function ConfirmationDialog({
  message,
  onConfirm,
  onDismiss,
  open,
  title,
}: ConfirmationDialogProps) {
  return (
    <Dialog PaperProps={paperStyles} open={open} onClose={onDismiss}>
      <DialogTitle textAlign="center">
        <IconButton
          style={{ position: 'absolute', top: '0', right: '0', color: 'white' }}
          onClick={onDismiss}
        >
          <CloseIcon />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          style={{ width: '100%' }}
          startIcon={<CheckIcon />}
          color="primary"
          variant="contained"
          onClick={onConfirm}
        >
          {DIALOG_ACTION_TEXT}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
