import HeaderNav from './headerNav/HeaderNav';
import Hero from './hero/Hero';

export default function Header() {
    return (
        <header className={styles.Header}>
            <HeaderNav />
            <Hero />
        </header>
    );
}
