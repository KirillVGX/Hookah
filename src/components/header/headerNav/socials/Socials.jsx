import styles from './socials.module.css';

export default function Socials() {
    return (
        <div className={styles.socials}>
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
    );
}
