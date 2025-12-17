import { lazy, Suspense } from 'react';
import styles from './page.module.css';
import Reveal from '@/components/reveal/Reveal.jsx';

const AboutService = lazy(() => import('@/components/catering/AboutService/AboutService'));
const HowWorksCatering = lazy(() => import('@/components/delivery/HowWorks/HowWorksCatering'));
const AmountHookahs = lazy(() => import('@/components/catering/AmountHookahs/AmountHookahs'));
const Inclusions = lazy(() => import('@/components/catering/Inclusions/Inclusions'));
const Advantages = lazy(() => import('@/components/catering/OurAdvantages/Advantages'));
const Gallery = lazy(() => import('@/components/catering/Gallery/Gallery'));
const ContactUs = lazy(() => import('@/components/catering/ContactUs/ContactUs'));

export default function Catering() {
    return (
        <main className={styles.main}>
            <Suspense fallback={<div className={styles.loader}>Loading...</div>}>
                <Reveal>
                    <AboutService />
                </Reveal>

                <hr className={styles.hr} />

                <Reveal>
                    <HowWorksCatering />
                </Reveal>

                <Reveal>
                    <AmountHookahs />
                </Reveal>

                <Reveal>
                    <Inclusions />
                </Reveal>

                <Reveal>
                    <Advantages />
                </Reveal>

                <Reveal>
                    <Gallery />
                </Reveal>

                <hr className={styles.hr} />

                <Reveal>
                    <ContactUs />
                </Reveal>
            </Suspense>
        </main>
    );
}
