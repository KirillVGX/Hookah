import styles from './amountHookahs.module.css';
import { useRef, useEffect, useState } from 'react';
import HeroButton from '../../header/hero/heroButton/HeroButton';

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

export default function AmountHookahs() {
    const sliderRef = useRef(null);
    const thumbRef = useRef(null);
    const fillRef = useRef(null);
    const shiftXRef = useRef(0);

    const [value, setValue] = useState(1); // текущая выбранная цифра

    useEffect(() => {
        const slider = sliderRef.current;
        const thumb = thumbRef.current;
        const fill = fillRef.current;
        if (!slider || !thumb || !fill) return;

        thumb.style.left = `0px`;
        fill.style.width = `0px`;

        function onMove(e) {
            const sliderRect = slider.getBoundingClientRect();
            const thumbW = thumb.offsetWidth;
            let newLeft = e.clientX - shiftXRef.current - sliderRect.left;

            if (newLeft < 0) newLeft = 0;
            const rightEdge = slider.offsetWidth;
            if (newLeft > rightEdge) newLeft = rightEdge;

            thumb.style.left = `${newLeft}px`;
            fill.style.width = `${newLeft + thumbW / 2 - 12}px`;
        }

        function onUp(e) {
            try {
                thumb.releasePointerCapture(e.pointerId);
            } catch {}

            const sliderRect = slider.getBoundingClientRect();
            const rightEdge = slider.offsetWidth;
            const steps = 5; // количество делений
            const stepSize = rightEdge / (steps - 1); // расстояние между делениями

            let currentCenter =
                parseFloat(thumb.style.left) + thumb.offsetWidth / 2;
            let nearestStep = Math.round(currentCenter / stepSize);

            // фиксируем новое положение
            let snapLeft = nearestStep * stepSize;
            thumb.style.left = `${snapLeft}px`;
            fill.style.width = `${snapLeft + thumb.offsetWidth / 2 - 12}px`;

            setValue(nearestStep + 1);

            thumb.removeEventListener('pointermove', onMove);
            thumb.removeEventListener('pointerup', onUp);
        }

        function onDown(e) {
            e.preventDefault();
            shiftXRef.current = e.clientX - thumb.getBoundingClientRect().left;
            thumb.setPointerCapture(e.pointerId);
            thumb.addEventListener('pointermove', onMove);
            thumb.addEventListener('pointerup', onUp);
        }

        function onDragStart(e) {
            e.preventDefault();
        }

        thumb.addEventListener('pointerdown', onDown);
        thumb.addEventListener('dragstart', onDragStart);

        return () => {
            thumb.removeEventListener('pointerdown', onDown);
            thumb.removeEventListener('dragstart', onDragStart);
            thumb.removeEventListener('pointermove', onMove);
            thumb.removeEventListener('pointerup', onUp);
        };
    }, []);

    return (
        <section className={styles.AmountHookahsSection}>
            <h2 className={styles.title}>Choose how many hookahs you need</h2>
            <h6 className={styles.desciption}>
                This online calculator will show your order price depending on
                required event duration
            </h6>
            <div className={styles.buttons}>
                {buttons.map((btn) => (
                    <div
                        className={styles.button}
                        key={btn.id}
                    >
                        <button className={styles.amountBtn}>
                            {btn.btnTxt}
                        </button>
                        <p className={styles.desciptionBtn}>{btn.btnD}</p>
                    </div>
                ))}
            </div>
            <hr className={styles.hr} />
            <div className={styles.calcDiv}>
                <div className={styles.amountCatering}>
                    <div className={styles.time}>
                        <h6 className={styles.timeLabel}>
                            Choose the hookah event duration:
                        </h6>
                        <h6 className={styles.hours}>{value} hours</h6>
                    </div>
                    <div
                        ref={sliderRef}
                        className={styles.slider}
                    >
                        <div
                            ref={fillRef}
                            className={styles.fill}
                        />
                        <div
                            ref={thumbRef}
                            className={styles.thumb}
                        />
                        <div className={styles.sliderMarks}>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                        </div>
                    </div>
                </div>
                <div className={styles.priceCatering}>
                    <h6 className={styles.priceLabel}>
                        Your hookah catering order price:
                    </h6>
                    <h2 className={styles.price}>$320</h2>
                </div>
            </div>
            <hr className={styles.hr} />
            <HeroButton
                text="Order hookah catering"
                maxWidth="329px"
            />
            <h6 className={styles.warning}>
                Prices don’t include tax and tips
            </h6>
            <h6 className={styles.warningPs}>
                You’ll only pay extra if you book extra time or activities.
            </h6>
        </section>
    );
}