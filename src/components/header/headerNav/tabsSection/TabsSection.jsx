import styles from './tabsSection.module.css';

export default function Button({ active, onChange }) {
    return (
        <div className={styles.buttonContainer}>
            <button
                className={styles.buttonHeader}
                onClick={() => onChange('main')}
                isActive={active === 'main'}
            >
                HOOKAH RENTALS & DELIVERY
            </button>
            <button
                className={styles.buttonHeader}
                onClick={() => onChange('catering')}
                isActive={active === 'catering'}
            >
                HOOKAH CATERING
            </button>
        </div>
    );
}
