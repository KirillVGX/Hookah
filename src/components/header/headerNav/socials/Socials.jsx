import styles from './socials.module.css';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Socials({ className }) {
    const isTablet = useMediaQuery('(max-width: 768px)');

    return (
        <>
            {!isTablet && (
                <div className={[styles.socials, className].join(' ')}>
                    <div className={styles.fbAndInst}>
                        <span className={styles.socialsOrange}>
                            <img
                                className={styles.socialsItems}
                                src="./images/socials/facebook.svg"
                                alt="facebook"
                            />
                        </span>
                        <span className={styles.socialsOrange}>
                            <img
                                className={styles.socialsItems}
                                src="./images/socials/instagram.svg"
                                alt="instagram"
                            />
                        </span>
                    </div>
                    <div className={styles.viberInner}>
                        <span className={styles.viberPuddle}>
                            <img
                                className={styles.viber}
                                src="./images/socials/viber.svg"
                                alt="viber"
                            />
                        </span>
                        <span className={styles.number}>+1 (305) 981-6688</span>
                    </div>
                </div>
            )}

            {isTablet && (
                <span className={styles.viberPuddle}>
                    <img
                        className={styles.viber}
                        src="./images/socials/viber.svg"
                        alt="viber"
                    />
                </span>
            )}
        </>
    );
}
