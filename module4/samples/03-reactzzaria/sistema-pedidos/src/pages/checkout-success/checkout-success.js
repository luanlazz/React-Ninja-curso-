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
import { useAuth } from 'hooks'
import FooterCheckout from 'pages/checkout/footer-checkout'
import { HOME } from 'routes'

function CheckoutSuccess () {
  const { userInfo } = useAuth()

  return (
    <>
      <Content>
        <HeaderConfirm>
          <H4>Prontinho {userInfo.user.firstName}</H4>

          <Typography>
            Seu pedido será entregue no endereço abaixo em até
          </Typography>

          <H6>
            40 minutos ;)
          </H6>

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
          color='secondary'
          size='large'
          component={Link}
          to={HOME}
        >
          Voltar para página inicial
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

export default CheckoutSuccess
