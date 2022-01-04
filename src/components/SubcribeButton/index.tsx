import styles from './styles.module.scss'

export default function SubscribeButton(){
  return(
    <button
      type="button"
      className={styles.subcribeButton}
    >
      Subcribe now
    </button>
  )
}