import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { AccordionSummary, Avatar, CardHeader } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

import { GroupProps } from '../../../common/typings'

export default function Group({ title, status }: GroupProps) {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${title}-content`}
      id={`${title}-group`}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: deepPurple[500] }}
            alt="Group"
            src={require('../../../assets/avatar/group.png')}
          />
        }
        title={title}
        subheader={status}
      />
    </AccordionSummary>
  )
}
