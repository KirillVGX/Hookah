import styles from './amountBtn.module.css';
import { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import AmountList from './AmountList/AmountList';
import { buttons } from '@/data/buttons';

export default function AmountBtn({ onSelect }) {
    const isTablet = useMediaQuery('(max-width: 768px)');
    const isLaptop = useMediaQuery('(max-width: 1225px)');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [active, setActive] = useState(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (btn) => {
        setActive(btn);
        onSelect(btn.price);
        setIsOpen(false);
    };

    return (
        <div
            className={styles.block}
            ref={dropdownRef}
        >
            {!isTablet && (
                <div className={styles.buttons}>
                    {buttons.map((btn) => (
                        <div
                            className={styles.button}
                            key={btn.id}
                        >
                            <button
                                className={`${styles.amountBtn} ${
                                    active?.id === btn.id ? styles.active : ''
                                }`}
                                onClick={() => {
                                    setActive(btn);
                                    onSelect(btn.price);
                                }}
                            >
                                <span className={styles.amountBtnText}>
                                    {btn.id === 5 && isLaptop
                                        ? '15 and more'
                                        : btn.btnTxt}
                                </span>
                            </button>
                            <p className={styles.desciptionBtn}>
                                {!isLaptop && <span>{btn.btnD}</span>}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {isTablet && (
                <>
                    <button
                        className={styles.list}
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-haspopup="listbox"
                        aria-expanded={isOpen}
                    >
                        <p className={styles.openButtonText}>
                            {active ? active.btnTxt : 'Choose hookah quantity'}
                        </p>
                        <img
                            src="./images/left-arrow.svg"
                            alt="open menu"
                            className={`${styles.openBtnImg} ${
                                isOpen ? styles.rotate : ''
                            }`}
                        />
                    </button>

                    {isOpen && (
                        <AmountList
                            buttons={buttons}
                            active={active}
                            onSelect={handleSelect}
                        />
                    )}
                </>
            )}

            {isLaptop && !isTablet && (
                <>
                    <p className={styles.desciptionBtn}>
                        Good for parties up to 15
                        <br />
                        Served by 1 hookah attendants.
                    </p>
                </>
            )}
        </div>
    );
}
