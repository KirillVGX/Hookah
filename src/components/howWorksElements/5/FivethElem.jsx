import styles from './fivethElem.module.css'

export default function FivethElem() {
    return (
        <div className={styles.imgWrapper}>
            <img className={styles.fume} src="/images/howWorks/5/fume.png" alt="fume" />
            <img className={styles.hookah} src="/images/howWorks/1/hookah.png" alt="hookah" />
        </div>
    )
}