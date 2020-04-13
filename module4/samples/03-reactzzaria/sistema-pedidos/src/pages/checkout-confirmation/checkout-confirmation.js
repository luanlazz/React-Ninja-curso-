import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Container,
  Divider as MaterialDivider,
  Paper,
  Typography,
  Button
} from '@material-ui/core'
import {
  AddressInfo,
  Content,
  H4,
  H6,
  OrderInfo,
  PhoneInfo
} from 'ui'
import FooterCheckout from 'pages/checkout/footer-checkout'
import { useAuth, useOrder } from 'hooks'
import { CHECKOUT_SUCCESS } from 'routes'

function CheckoutConfirmation () {
  const { userInfo } = useAuth()
  const { sendOrder } = useOrder()

  return (
    <>
      <Content>
        <HeaderConfirm>
          <H4>Olá {userInfo.user.firstName}</H4>
          <Typography>
            Confere, por favor, se está tudo certo antes de finalizar?
          </Typography>
        </HeaderConfirm>

        <Container maxWidth='sm'>
          <PaperContainer>
            <H6>Seu pedido:</H6>
            <OrderInfo />

            <Divider />

            <AddressInfo />

            <Divider />

            <PhoneInfo />

          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center'>
        <Button
          variant='contained'
          color='primary'
          size='large'
          component={Link}
          to={CHECKOUT_SUCCESS}
          onClick={sendOrder}
        >
          Tudo certo!
        </Button>
      </FooterCheckout>
    </>
  )
}

const HeaderConfirm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-cottom: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

const PaperContainer = styled(Paper)`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`

const Divider = styled(MaterialDivider)`
  && {
    margin: ${({ theme }) => theme.spacing(3, 0)};
  }
`

export default CheckoutConfirmation
