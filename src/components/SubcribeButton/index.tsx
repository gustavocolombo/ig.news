import styles from './styles.module.scss'

interface SubscriptionButtonProps{
  priceId: string
}

export default function SubscribeButton({priceId}: SubscriptionButtonProps){
  return(
    <button
      type="button"
      className={styles.subcribeButton}
    >
      Subcribe now
    </button>
  )
}