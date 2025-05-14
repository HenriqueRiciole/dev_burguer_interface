import Logo from '../../assets/logo.svg'
import { CartItems, CartResume } from '../../components'
import { Banner, Container, Content, Tittle } from './styles'

export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo devburger" />
            </Banner>
            <Tittle>Checkout - Pedidos</Tittle>
            <Content>
                <CartItems />
                <CartResume />
            </Content>

        </Container>
    )
}