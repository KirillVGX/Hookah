import styles from './sixthElem.module.css';

export default function SixthElem() {
    return (
        <div className={styles.imgWrapper}>
            <img
                className={styles.fume}
                src="/images/howWorks/6/fume.png"
                alt="fume"
            />
            <img
                className={styles.man}
                src="/images/howWorks/6/man.png"
                alt="car"
            />
        </div>
    );
}
