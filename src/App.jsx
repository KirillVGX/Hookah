import { useState } from 'react';
import styles from './app.module.css';
import Delivery from './pages/delivery';
import Catering from './pages/catering';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import HeroCatering from './components/hero/HeroCatering';
import TabsSection from './components/header/headerNav/tabsSection/TabsSection';
import Footer from './components/footer/Footer';

export default function App() {
    const [tab, setTab] = useState('delivery');

    return (
        <>
            {/* <Header>
                <TabsSection
                isActive={tab}
                onChange={(current) => setTab(current)}
                className={styles.tabsSection}
                />
            </Header> */}

            {tab === 'delivery' && <Hero />}
            {tab === 'catering' && <HeroCatering />}

            {tab === 'delivery' && <Delivery />}
            {tab === 'catering' && <Catering />}

            {/* <Footer /> */}
        </>
    );
}
