import HeaderNav from "./headerNav/HeaderNav";
import Hero from "./hero/Hero";
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.Header}>
            <HeaderNav />
            <Hero />
        </header>
    )
}