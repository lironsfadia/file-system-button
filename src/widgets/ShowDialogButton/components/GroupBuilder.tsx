import { Accordion } from '@mui/material'

import { GroupBuilderProps } from '../../../common/typings'
import Group from './Group'
import GroupMember from './GroupMember'

export default function GroupBuilder({
  handleCleanup,
  handleClick,
  parent,
  siblings,
}: GroupBuilderProps) {
  return (
    parent && (
      <Accordion>
        <Group
          key={parent.title}
          title={parent.title}
          subtitle={parent.subtitle}
          image={parent.image}
          openHandler={handleClick}
          closeHandler={handleCleanup}
        />
        {(siblings[parent.title] || []).map(
          ({ isDir, title, subtitle, image, children }) =>
            isDir ? (
              GroupBuilder({
                parent: { isDir, title, subtitle, image, children },
                siblings,
                handleClick,
                handleCleanup,
              })
            ) : (
              <GroupMember
                key={title}
                subtitle={subtitle}
                title={title}
                image={image}
                isRoot={true}
              />
            )
        )}
      </Accordion>
    )
  )
}
