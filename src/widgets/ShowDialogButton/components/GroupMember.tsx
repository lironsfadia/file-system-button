import { AccordionDetails, Avatar, CardHeader } from '@mui/material'
import { common } from '@mui/material/colors'

import { GroupMemberProps } from '../../../common/typings'

export default function GroupMember({
  isRoot,
  title,
  subtitle,
  image,
}: GroupMemberProps) {
  const avatarStyles = { bgcolor: common, height: '50px', width: '50px' }
  const cardStyles = { ml: isRoot ? '50px' : 0 }
  return (
    <AccordionDetails>
      <CardHeader
        sx={cardStyles}
        avatar={<Avatar sx={avatarStyles} alt="Member" src={image} />}
        title={title}
        subheader={subtitle}
      />
    </AccordionDetails>
  )
}
