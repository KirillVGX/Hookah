import styles from './firstElem.module.css'

export default function FirstElem() {
    return (
        <div className={styles.imgWrapper}>
            <img className={styles.fume} src="/images/howWorks/1/fume.png" alt="fume" />
            <img className={styles.hookah} src="/images/howWorks/1/hookah.png" alt="hookah" />
        </div>
    )
}