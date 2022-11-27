import { AccordionDetails, Avatar, CardHeader } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

import { GroupMemberProps } from '../../../common/typings'

export default function GroupMember({
  name,
  approvalStatus,
}: GroupMemberProps) {
  return (
    <AccordionDetails>
      <CardHeader
        sx={{ ml: '50px' }}
        avatar={
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt="User"
            src={require('../../../assets/avatar/user.png')}
          />
        }
        title={name}
        subheader={approvalStatus}
      />
    </AccordionDetails>
  )
}
