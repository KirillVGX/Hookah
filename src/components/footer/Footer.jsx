import styles from './footer.module.css';
import Socials from './socialsDark/SocialsDark';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <img
                    src="./images/logoDark.svg"
                    className={styles.logo}
                />
                <div className={styles.info}>
                    <Socials />
                    <h5 className={styles.blog}>Blog</h5>
                </div>
            </div>
            <div className={styles.meta}>
                <h5 className={styles.location}>MIAMI, FL</h5>
                <h6 className={styles.copyright}>
                    Puff Hookah Catering © All Rights Reserved
                </h6>
            </div>
        </footer>
    );
}
