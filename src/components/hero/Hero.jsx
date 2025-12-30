import styles from './hero.module.css';
import HeroButton from './heroButton/HeroButton';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Modal from '@/components/modal/Modal';
import { useState } from 'react';

export default function Hero() {
    const isLaptop = useMediaQuery('(max-width: 1225px)');
    const [isModal, setisModal] = useState(false);

    return (
        <>
            <div className={styles.heroSection}>
                <div className={styles.content}>
                    <h1 className={styles.mainText}>
                        Hookah rentals with delivery in Miami and Fort
                        Lauderdale
                    </h1>
                    <h5 className={styles.description}>
                        We’ll deliver the hookah, set it up and leave it to you
                        <span className={styles.marker}> for 24 hours.</span>
                    </h5>
                    <HeroButton text="Order service" />
                </div>
                <div className={styles.imageInner}>
                    <img
                        className={styles.image}
                        src={
                            isLaptop
                                ? './images/header/hookah.png'
                                : './images/header/hookahM.png'
                        }
                        alt="hookah"
                    />
                </div>
            </div>
            <Modal
                isModal={isModal}
                onClose={() => setisModal(false)}
                amount = '3'
            >
                <div className={styles.product}>
                    <img
                        className={styles.modalImage}
                        src="/images/plans/1.svg"
                        alt="product image"
                    />
                    <div className={styles.text}>
                        <h5 className={styles.amountHookahs}>1 hookah</h5>
                        <h6 className={styles.modalDescription}>
                            3 tobacco filled fruit heads
                        </h6>
                    </div>
                    <h5 className={styles.modalPrice}>$75</h5>
                </div>
            </Modal>
        </>
    );
}
