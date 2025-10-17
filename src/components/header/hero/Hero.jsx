import styles from './hero.module.css';
import HeroButton from './heroButton/HeroButton';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [isLarge, setIsLarge] = useState(window.innerWidth > 1225);

    useEffect(() => {
        const handleResize = () => {
            setIsLarge(window.innerWidth > 1225);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.mainText}>
                    Hookah rentals with delivery in Miami and Fort Lauderdale
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
                        isLarge
                            ? './images/header/hookah.png'
                            : './images/header/hookahM.png'
                    }
                    alt="hookah"
                />
            </div>
        </div>
    );
}
