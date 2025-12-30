import styles from './heroButton.module.css';

export default function HeroButton({
    text,
    maxWidth,
    type = 'button',
    onClick,
}) {
    return (
        <button
            className={styles.heroButton}
            style={{ maxWidth }}
            type={type}
            onClick={onClick}
        >
            <span className={styles.buttonText}>{text}</span>
        </button>
    );
}
