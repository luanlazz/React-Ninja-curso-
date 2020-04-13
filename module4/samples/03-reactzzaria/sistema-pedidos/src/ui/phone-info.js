import React from 'react'
import { Typography } from '@material-ui/core'
import { H6 } from 'ui'
import { useOrder } from 'hooks'

function PhoneInfo () {
  const { order } = useOrder()

  return (
    <>
      <H6>Telefone para contato:</H6>
      <Typography>
        {order.phone}
      </Typography>
    </>
  )
}

export default PhoneInfo
