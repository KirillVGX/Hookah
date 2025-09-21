import styles from './hero.module.css';
import HeroButton from './heroButton/HeroButton';

const heroImg = './images/header/heroCatering/png';

export default function HeroCatering() {
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
                    src={heroImg}
                    alt="hookah"
                />
            </div>
        </div>
    );
}