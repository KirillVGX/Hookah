import styles from './amountBtn.module.css';
import { useState, useEffect } from 'react';

const buttons = [
    {
        id: 1,
        btnTxt: '3 hookahs',
        btnD: 'Good for parties up to 15 Served by 1 hookah attendants.',
    },
    {
        id: 2,
        btnTxt: '5 hookahs',
        btnD: 'Good for parties up to 30 Served by 2hookah attendants.',
    },
    {
        id: 3,
        btnTxt: '7 hookahs',
        btnD: 'Good for parties up to 45 Served by 3 hookah attendant.',
    },
    {
        id: 4,
        btnTxt: '9 hookahs',
        btnD: 'Good for parties up to 60 Served by 4 hookah attendants.',
    },
    {
        id: 5,
        btnTxt: '15 and more hookahs',
        btnD: 'Good for parties up to 75 Served by 5 hookah attendants.',
    },
];

export default function AmountBtn() {
    const [activeId, setActiveId] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.block}>
            <div className={styles.buttons}>
                {buttons.map((btn) => (
                    <div
                        className={styles.button}
                        key={btn.id}
                    >
                        <button
                            className={`${styles.amountBtn} ${
                                activeId === btn.id ? styles.active : ''
                            }`}
                            onClick={() => setActiveId(btn.id)}
                        >
                            <span className={styles.amountBtnText}>
                                {btn.id === 5 && width <= 1225
                                    ? '15 and more'
                                    : btn.btnTxt}
                            </span>
                        </button>
                        <p className={styles.desciptionBtn}>
                            {width > 1225 && <p>{btn.btnD}</p>}
                        </p>
                    </div>
                ))}
            </div>
            {width <= 1225 && (
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
