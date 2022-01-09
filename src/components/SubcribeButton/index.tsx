import { signIn, useSession } from 'next-auth/react'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss'

interface SubscriptionButtonProps{
  priceId: string
}

export default function SubscribeButton({priceId}: SubscriptionButtonProps){

  const session = useSession();

  async function handleCreateCheckoutSession(){
    if(!session){
      signIn('github')
      return
    }

    try{
      const response = await api.post('/subscribe')

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({sessionId: sessionId});
    }catch{
      throw new Error('Impossível fazer checkout de compra')
    }
  }

  return(
    <button
      type="button"
      className={styles.subcribeButton}
      onClick={handleCreateCheckoutSession}
    >
      Subcribe now
    </button>
  )
}