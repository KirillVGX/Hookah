import { useState, lazy, Suspense } from 'react';
import styles from './app.module.css';

import Header from '@/components/header/Header';
import TabsSection from '@/components/header/headerNav/tabsSection/TabsSection';
import Footer from '@/components/footer/Footer';

const Delivery = lazy(() => import('@/pages/delivery'));
const Catering = lazy(() => import('@/pages/catering'));

import Hero from '@/components/hero/Hero';
import HeroCatering from '@/components/hero/HeroCatering';

export default function App() {
    const [tab, setTab] = useState('delivery');

    return (
        <>
            <Header>
                <TabsSection
                    isActive={tab}
                    onChange={setTab}
                    className={styles.tabsSection}
                />
            </Header>

            {tab === 'delivery' && <Hero />}
            {tab === 'catering' && <HeroCatering />}

            <Suspense
                fallback={<div className={styles.pageLoader}>Loading...</div>}
            >
                {tab === 'delivery' && <Delivery />}
                {tab === 'catering' && <Catering />}
            </Suspense>

            <Footer />
        </>
    );
}
