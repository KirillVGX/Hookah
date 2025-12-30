import styles from './hero.module.css';
import HeroButton from './heroButton/HeroButton';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function HeroCatering() {
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <div className={`${styles.heroSection} ${styles.heroCatering}`}>
            <div className={`${styles.content} ${styles.contentCatering}`}>
                <h1 className={styles.mainText}>
                    Hookah catering in Miami and all SoFlo
                </h1>
                <h5 className={styles.description}>
                    We bring exceptional hookah experience
                    <span className={styles.marker}> to your event</span>
                </h5>
                <HeroButton text="Order service" />
            </div>
            {!isTablet && (
                <div
                    className={`${styles.imageInner} ${styles.imageInnerCatering}`}
                >
                    <img
                        className={`${styles.image} ${styles.imageCatering}`}
                        src="./images/header/heroCatering.png"
                        alt="hookah"
                    />
                </div>
            )}
        </div>
    );
}
