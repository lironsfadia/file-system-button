import LoadingButton from '@mui/lab/LoadingButton'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, CardHeader } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import React, { useEffect } from 'react'

import { ShowDialogButtonProps } from '../../../common/typings'
import useConfirmationDialog from '../useConfirmationDialog'
import Group from './Group'
import GroupMemeber from './GroupMemeber'

function ShowDialogButton({
  id,
  title,
  data,
  isLoading,
  getDataHandler,
}: ShowDialogButtonProps) {
  const { getConfirmation } = useConfirmationDialog()

  useEffect(() => {
    if (data.length > 0) {
      const dummyData = [
        {
          id: 1,
          details: [
            {
              title: 'US admin',
              status: '2 approved out of 2',
              body: [
                { approve: 'Eyal', when: 'approved before day' },
                { approve: 'Zibi', when: 'approved before year' },
              ],
            },
            {
              title: 'TLV admin',
              body: [
                { approve: 'Offer', when: 'approved before day' },
                { approve: 'kiki', when: 'approved before year' },
              ],
            },
          ],
        },
        {
          id: 2,
          details: [
            {
              title: 'US admin',
              status: '2 approved out of 2',
              body: [
                { approve: 'Eyal', when: 'approved before day' },
                { approve: 'Zibi', when: 'approved before year' },
              ],
            },
          ],
        },
      ]

      const data = dummyData.find((value) => value.id === id)
      const onClick = async () => {
        const confirmed = await getConfirmation({
          title: title,
          message: data?.details.map((value) => (
            <Accordion>
              <Group title={value.title} status={value.status} />
              {value.body.map((bodyValue) => (
                <GroupMemeber
                  approvalStatus={bodyValue.when}
                  name={bodyValue.approve}
                />
              ))}
            </Accordion>
          )),
        })

        if (confirmed) alert('A MOOSE once bit my sister... No realli!')
      }
      onClick()
    }
  }, [data, title])

  return (
    <LoadingButton
      loading={isLoading}
      loadingPosition="center"
      variant="outlined"
      onClick={getDataHandler}
    >
      {isLoading ? '' : 'Delete the Internet'}
    </LoadingButton>
  )
}

export default ShowDialogButton
