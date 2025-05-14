import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useCart } from "../../hooks/CartContext";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";

import { Button } from "../Button";
import { Container, ContainerBottom, ContainerTop } from "./styles";


export function CartResume() {
    const [finalPrice, setFinalPrice] = useState([])
    const [deliverTax] = useState(500)

    const navigate = useNavigate()

    const { cartProducts, clearCart } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)
        setFinalPrice(sumAllItems)
    }, [cartProducts])

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return { id: product.id, quantity: product.quantity, price: product.price }
        })

        try {
            const { data: orderData } = await api.post('/orders', { products });


            const { data: paymentData } = await api.post('/create-payment-intent', { products })

            navigate('/checkout', {
                state: paymentData

            })
        } catch (err) {
            toast.error('Erro, tente novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }



    }

    return (
        <div>
            <Container>
                <ContainerTop>
                    <h2 className="tittle">Resumo do Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliverTax)}</p>
                </ContainerTop>
                <ContainerBottom>
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliverTax)}</p>
                </ContainerBottom>
            </Container>
            <Button onClick={submitOrder} >Finalizar Pedido</Button>
        </div>
    )
}