import styles from './socialsDark.module.css'
import facebook from '../../../assets/images/socials/facebook.svg';
import instagram from '../../../assets/images/socials/instagram.svg';
import viber from '../../../assets/images/socials/viber.svg';

export default function Socials() {
    return (
        <div className={styles.socials}>
            <span className={styles.socialsOrange}>
                <img className={styles.socialsItems} src={facebook} alt="facebook" />
            </span>
            <span className={styles.socialsOrange}>
                <img className={styles.socialsItems} src={instagram} alt="instagram" />
            </span>
            <div className={styles.viberInner}>
                <span className={styles.viberPuddle}>
                    <img className={styles.viber} src={viber} alt="viber" />
                </span>
                <span className={styles.number}>+1 (305) 981-6688</span>
            </div>
        </div>
    )
}