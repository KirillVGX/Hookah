import styles from './tabsSection.module.css';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useState } from 'react';

export default function TabsSection({ isActive, onChange, className }) {
    const isTablet = useMediaQuery('(max-width: 768px)');
    const [open, setOpen] = useState(false);

    const label =
        isActive === 'delivery'
            ? 'HOOKAH RENTALS & DELIVERY'
            : 'HOOKAH CATERING';

    return (
        <>
            {!isTablet && (
                <div className={[styles.buttonContainer, className].join(' ')}>
                    <button
                        className={`${styles.tabButton} ${
                            isActive === 'delivery'
                                ? styles.tabButtonActive
                                : ''
                        }`}
                        onClick={() => onChange('delivery')}
                    >
                        HOOKAH RENTALS
                        <br /> & DELIVERY
                    </button>
                    <button
                        className={`${styles.tabButton} ${
                            isActive === 'catering'
                                ? styles.tabButtonActive
                                : ''
                        }`}
                        onClick={() => onChange('catering')}
                    >
                        HOOKAH CATERING
                    </button>
                </div>
            )}

            {isTablet && (
                <>
                    <button
                        className={styles.dropdownButton}
                        onClick={() => setOpen(!open)}
                    >
                        <p className={styles.btnText}>{label}</p>
                        <span className={styles.arrow}>{open ? '▲' : '▼'}</span>
                    </button>
                    <div className={styles.dropdown}>
                        {open && (
                            <div className={styles.dropdownMenu}>
                                <button
                                    onClick={() => {
                                        onChange('delivery');
                                        setOpen(false);
                                    }}
                                >
                                    HOOKAH RENTALS & DELIVERY
                                </button>

                                <button
                                    onClick={() => {
                                        onChange('catering');
                                        setOpen(false);
                                    }}
                                >
                                    HOOKAH CATERING
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
