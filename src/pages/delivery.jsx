import styles from './page.module.css';

import Instruction from '../components/delivery/instruction/Instruction';
import HowWorks from '../components/delivery/HowWorks/HowWorks';
import Gets from '../components/delivery/Gets/Gets';
import Covid from '../components/delivery/Covid/Covid';
import Reason from '../components/delivery/Reason/Reason';
import Features from '../components/delivery/Features/Features';
import ChoosePackage from '../components/delivery/ChoosePackage/ChoosePackage';

export default function Delivery() {
    return (
        <main className={styles.main}>
            <Instruction />
            <HowWorks />
            <Gets className={styles.gets} />
            <Covid />
            <Reason />
            <Features />
            <ChoosePackage />
        </main>
    );
}
