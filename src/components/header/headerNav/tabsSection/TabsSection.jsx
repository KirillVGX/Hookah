import styles from './tabsSection.module.css';

export default function Button({ isActive, onChange }) {
    return (
        <div className={styles.buttonContainer}>
            <button
                className={`${styles.tabButton} ${isActive === 'main' ? styles.tabButtonActive : ''}`}
                onClick={() => onChange('main')}
            >
                HOOKAH RENTALS<br /> & DELIVERY
            </button>
            <button
                className={`${styles.tabButton} ${isActive === 'catering' ? styles.tabButtonActive : ''}`}
                onClick={() => onChange('catering')}
            >
                HOOKAH CATERING
            </button>
        </div>
    );
}
