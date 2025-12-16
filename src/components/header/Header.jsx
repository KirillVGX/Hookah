import styles from './header.module.css'

import Socials from './headerNav/socials/Socials';

export default function Header({ children }) {
    return (
        <header className="header">
            <nav className={styles.nav}>
                <div className={styles.logoButtons}>
                    <img
                        src="./images/logo.svg"
                        className={styles.logo}
                    />
                    {children}
                </div>
                <Socials className={styles.socials} />
            </nav>
        </header>
    );
}
