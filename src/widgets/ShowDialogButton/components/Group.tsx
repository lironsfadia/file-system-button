import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { AccordionSummary, Avatar, CardHeader } from '@mui/material'
import { common } from '@mui/material/colors'
import { useState } from 'react'

import { GroupProps } from '../../../common/typings'

export default function Group({
  closeHandler,
  image,
  openHandler,
  subtitle,
  title,
}: GroupProps) {
  const [open, setOpen] = useState(false)

  const avatarStyles = { bgcolor: common, height: '50px', width: '50px' }

  const handleExpandClick = (e: unknown) => {
    const handler = !open ? openHandler : closeHandler
    handler(title)
    setOpen(!open)
  }
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon style={{ cursor: 'pointer' }} />}
      aria-controls={`${title}-content`}
      id={`${title}-group`}
      onClick={handleExpandClick}
    >
      <CardHeader
        avatar={<Avatar sx={avatarStyles} alt="Group" src={image} />}
        title={title}
        subheader={subtitle}
      />
    </AccordionSummary>
  )
}
