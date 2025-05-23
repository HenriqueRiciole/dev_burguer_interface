import { useLocation, useNavigate } from "react-router"
import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import './styles.css';
import { useCart } from "../../../hooks/CartContext";
import { toast } from "react-toastify";
import { api } from "../../../services/api";



export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart()
  const stripe = useStripe();
  const elements = useElements();
  const { state: { dpmCheckerLink } } = useLocation()
  const navigate = useNavigate()

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe ou Elements com falha, tente novamente!")
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',

    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message)
    } else if (paymentIntent && paymentIntent === 'succeedeed') {
      try {
        const products = cartProducts.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
            price: product.price
          }
        })

        const { status } = await api.post(
          '/orders', { products }, {
          validateStatus: () => true
        }
        );
        if (status === 200 || status === 201) {
          setTimeout(() => {
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`)
          }, 2000)
          clearCart()
          toast.success('Pedido realizado  com sucesso!')
        } else if (status === 400) {
          toast.error('Falha ao realizar o pedido!')
        } else {
          throw new Error()
        }

      } catch (error) {
        toast.error('Falha no Sistema!')
      }
    } else {
      navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`)
    }

    setIsLoading(false);
  }

  const paymentElementOptions = {
    layout: "accordion"
  }

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>

        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} onClick={() => clearCart()} id="submit" className="button">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar Agora."}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};
