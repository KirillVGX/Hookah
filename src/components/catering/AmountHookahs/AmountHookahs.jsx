import styles from './amountHookahs.module.css';
import HeroButton from '../../hero/heroButton/HeroButton';
import AmountBtn from './AmountBtn/AmountBtn';
import Sliderr from './AmountSlider/AmountSlider';
import { useState } from 'react';

export default function AmountHookahs() {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [hours, setHours] = useState(5);

    const basePrice = selectedAmount ?? 350;
    const totalPrice = basePrice * hours;

    return (
        <section className={styles.AmountHookahsSection}>
            <h2 className={styles.title}>Choose how many hookahs you need</h2>
            <h6 className={styles.desciption}>
                This online calculator will show your order price depending on
                required event duration
            </h6>
            <AmountBtn onSelect={setSelectedAmount} />
            <hr className={styles.hr} />
            <div className={styles.calcDiv}>
                <Sliderr onSelect={setHours} />
                <div className={styles.priceCatering}>
                    <h6 className={styles.priceLabel}>
                        Your hookah catering order price:
                    </h6>
                    <h2 className={styles.price}>
                        ${totalPrice}
                    </h2>
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
