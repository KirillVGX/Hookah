import styles from './contactUs.module.css';

export default function ContactUs() {
    return (
        <section className={styles.contactUs}>
            <h4 className={styles.title}>
                Need something <span className={styles.highlight}>special</span>
                ?
            </h4>
            <h6 className={styles.description}>
                Contact us today to discuss your custom hookah package.
            </h6>
        </section>
    );
}
