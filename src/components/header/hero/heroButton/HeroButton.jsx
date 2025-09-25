import styles from './heroButton.module.css';

export default function HeroButton({ text, maxWidth }) {
    return (
        <button
            className={styles.heroButton}
            style={{ maxWidth }}
        >
            <span className={styles.buttonText}>{text}</span>
        </button>
    );
}
