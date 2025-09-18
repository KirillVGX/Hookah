import styles from './covid.module.css'

export default function Covid() {
    return (
        <section className={styles.covid}>
            <h3 className={styles.title}>COVID-19 update</h3>
            <p className={styles.desciption}>Hookah pipes are steam cleaned and sanitized after each use.<br />
                Every order comes with the brand new single-use hose.</p>
        </section>
    )
}