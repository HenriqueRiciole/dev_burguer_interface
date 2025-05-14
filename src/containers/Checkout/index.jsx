import { useLocation } from "react-router"
import { Elements } from "@stripe/react-stripe-js"

import stripePromise from "../../config/stripeConfig"
import { CheckoutForm } from "../../components"

export function Checkout() {

  const { state: { clientSecret } } = useLocation()

  if (!clientSecret) {
    return <div>Erro! Tente novamente.</div>
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm>
        Checkout
      </CheckoutForm>
    </Elements>
  )
}
