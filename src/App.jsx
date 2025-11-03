import './styles/normalize.css';
import './styles/globals.css';
import './styles/fonts.css';
import Delivery from './pages/delivery';
import Catering from './pages/catering';
import { useState } from 'react';
import styles from './app.module.css';

import Hero from './components/header/hero/Hero';
import HeroCatering from './components/header/hero/HeroCatering';
import TabsSection from './components/header/headerNav/tabsSection/TabsSection';
import Socials from './components/header/headerNav/socials/Socials';

export default function App() {
    const [tab, setTab] = useState('catering');

    return (
        <>
            <header className="header">
                <nav className={styles.nav}>
                    <div className={styles.logoButtons}>
                        <img
                            src="./images/logo.svg"
                            className={styles.logo}
                        />
                        <TabsSection
                            isActive={tab}
                            onChange={(current) => setTab(current)}
                            className={styles.tabsSection}
                        />
                    </div>
                    <Socials className={styles.socials} />
                </nav>
                {tab === 'main' && <Hero />}
                {tab === 'catering' && <HeroCatering />}
            </header>

            {tab === 'main' && <Delivery />}
            {tab === 'catering' && <Catering />}
        </>
    );
}
