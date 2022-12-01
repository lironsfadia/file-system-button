import { AccordionDetails, Avatar, CardHeader } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

import { GroupMemberProps } from '../../../common/typings'

export default function GroupMember({
  title,
  subtitle,
  image,
}: GroupMemberProps) {
  return (
    <AccordionDetails>
      <CardHeader
        sx={{ ml: '50px' }}
        avatar={
          <Avatar sx={{ bgcolor: deepOrange[500] }} alt="User" src={image} />
        }
        title={title}
        subheader={subtitle}
      />
    </AccordionDetails>
  )
}
