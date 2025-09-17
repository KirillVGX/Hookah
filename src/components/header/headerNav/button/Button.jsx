import styles from './button.module.css'

export default function Button() {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.buttonHeader}>
                HOOKAH RENTALS & DELIVERY
            </button>
            <button className={styles.buttonHeader}>
                HOOKAH CATERING
            </button>
        </div>
    )
}