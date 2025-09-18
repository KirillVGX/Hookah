import styles from './thirdElem.module.css'

export default function ThirdElem() {
    return (
        <div className={styles.imgWrapper}>
            <img className={styles.fume} src="/images/howWorks/1/fume.png" alt="fume" />
            <img className={styles.hookah} src="/images/howWorks/3/hookah.svg" alt="hookah" />
        </div>
    )
}