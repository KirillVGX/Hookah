import AboutService from '../components/main/AboutService/AboutService';
import HowWorksCatering from '../components/main/HowWorks/HowWorksCatering';
import AmountHookahs from '../components/main/AmountHookahs/AmountHookahs';
import Inclusions from '../components/main/Inclusions/Inclusions';
import Advantages from '../components/main/OurAdvantages/Advantages';
import Gallery from '../components/main/Gallery/Gallery';
import Footer from '../components/footer/Footer'
import ContactUs from '../components/main/ContactUs/ContactUs';

import styles from '../components/main/main.module.css';

export default function Catering() {
    return (
        <>
            <main className={styles.main} style={{marginBottom: '150px'}}>
                <AboutService />
                <hr className={styles.hr} />
                <HowWorksCatering />
                <AmountHookahs />
                <Inclusions />
                <Advantages />
                <Gallery />
                <hr className={styles.hr} />
                <ContactUs />
            </main>
            <Footer />
        </>
    );
}
