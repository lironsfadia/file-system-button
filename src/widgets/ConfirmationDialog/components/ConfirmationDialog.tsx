import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import React from 'react'

import { ConfirmationDialogProps } from '../../../common/typings'

export default function ConfirmationDialog({
  open,
  title,
  message,
  onConfirm,
  onDismiss,
}: ConfirmationDialogProps) {
  return (
    <Dialog
      PaperProps={{
        sx: {
          width: '100%',
          maxHeight: 800,
        },
      }}
      open={open}
      onClose={onDismiss}
    >
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
          Approved
        </Button>
      </DialogActions>
    </Dialog>
  )
}
