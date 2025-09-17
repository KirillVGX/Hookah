import styles from './heroButton.module.css'

export default function HeroButton({ text }) {
    return (
        <button className={styles.heroButton}>
            <span className={styles.buttonText}>
                {text}
            </span>
        </button>
    )
}