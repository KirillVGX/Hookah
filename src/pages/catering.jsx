import AboutService from '../components/main/AboutService/AboutService'
import HowWorksCatering from '../components/main/HowWorks/HowWorksCatering'
import AmountHookahs from '../components/main/AmountHookahs/AmountHookahs'

import styles from '../components/main/main.module.css';

export default function Catering() {
    return (
        <main className={styles.main}>
            <AboutService />
            <HowWorksCatering />
            <AmountHookahs />
        </main>
    );
}
