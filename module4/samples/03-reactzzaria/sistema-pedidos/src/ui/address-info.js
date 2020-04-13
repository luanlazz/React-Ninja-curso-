import React from 'react'
import { Typography } from '@material-ui/core'
import { H6 } from 'ui'
import { useOrder } from 'hooks'

function AddressInfo () {
  const { order } = useOrder()

  const { address, number, complement, district, code, city, state } = order.address

  return (
    <>
      <H6>Endereço para entrega:</H6>
      <Typography>
        {!!address && address}
        {!!number && `, n ${number}`}
        {!!complement && `, ${complement}`}<br />
        {!!district && `Bairro: ${district},`}<br />
        {!!code && `CEP: ${code}`}<br />
        {!!city && city}{!!state && `/${state}`}
      </Typography>
    </>
  )
}

export default AddressInfo
