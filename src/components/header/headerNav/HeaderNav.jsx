import styles from './headerNav.module.css';
import Button from './button/Button';
import Socials from './socials/Socials';

export default function HeaderNav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoButtons}>
                <img
                    src="./images/logo.svg"
                    className={styles.logo}
                />
                <Button />
            </div>
            <Socials />
        </nav>
    );
}
