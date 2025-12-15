import styles from './tabsSection.module.css';

export default function Button({ isActive, onChange, className }) {
    return (
        <div className={[styles.buttonContainer, className].join(' ')}>
            <button
                className={`${styles.tabButton} ${isActive === 'delivery' ? styles.tabButtonActive : ''}`}
                onClick={() => onChange('delivery')}
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
