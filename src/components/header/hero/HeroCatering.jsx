import styles from './hero.module.css';
import HeroButton from './heroButton/HeroButton';

export default function HeroCatering() {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.mainText}>
                    Hookah catering in Miami and all SoFlo
                </h1>
                <h5 className={styles.description}>
                    We bring exceptional hookah experience
                    <span className={styles.marker}> to your event</span>
                </h5>
                <HeroButton text="Order service" />
            </div>
            <div className={styles.imageInner}>
                <img
                    className={`${styles.image} ${styles.imageCatering}`}
                    src="./images/header/heroCatering.png"
                    alt="hookah"
                />
            </div>
        </div>
    );
}
