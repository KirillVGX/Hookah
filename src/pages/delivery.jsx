import { lazy, Suspense } from 'react';
import styles from './page.module.css';
import Reveal from '@/components/reveal/Reveal.jsx';

const Instruction = lazy(() => import('@/components/delivery/instruction/Instruction'));
const HowWorks = lazy(() => import('@/components/delivery/HowWorks/HowWorks'));
const Gets = lazy(() => import('@/components/delivery/Gets/Gets'));
const Covid = lazy(() => import('@/components/delivery/Covid/Covid'));
const Reason = lazy(() => import('@/components/delivery/Reason/Reason'));
const Features = lazy(() => import('@/components/delivery/Features/Features'));
const ChoosePackage = lazy(() => import('@/components/delivery/ChoosePackage/ChoosePackage'));

export default function Delivery() {
    return (
        <main className={styles.main}>
            <Suspense fallback={<div className={styles.loader}>Loading...</div>}>
                <Reveal>
                    <Instruction />
                </Reveal>
                <Reveal>
                    <HowWorks />
                </Reveal>
                <Reveal>
                    <Gets />
                </Reveal>
                <Reveal>
                    <Covid />
                </Reveal>
                <Reveal>
                    <Reason />
                </Reveal>
                <Reveal>
                    <Features />
                </Reveal>
                <Reveal>
                    <ChoosePackage />
                </Reveal>
            </Suspense>
        </main>
    );
}
