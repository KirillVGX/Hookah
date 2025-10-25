import styles from './page.module.css';

import AboutService from '../components/catering/AboutService/AboutService';
import HowWorksCatering from '../components/delivery/HowWorks/HowWorksCatering';
import AmountHookahs from '../components/catering/AmountHookahs/AmountHookahs';
import Inclusions from '../components/catering/Inclusions/Inclusions';
import Advantages from '../components/catering/OurAdvantages/Advantages';
import Gallery from '../components/catering/Gallery/Gallery';
import ContactUs from '../components/catering/ContactUs/ContactUs';

import Footer from '../components/footer/Footer'

export default function Catering() {
    return (
        <>
            <main className={styles.main} style={{marginBottom: '150px'}}>
                {/* <AboutService />
                <hr className={styles.hr} />
                <HowWorksCatering /> */}
                <AmountHookahs />
                {/* <Inclusions />
                <Advantages />
                <Gallery />
                <hr className={styles.hr} />
                <ContactUs /> */}
            </main>
            <Footer />
        </>
    );
}
