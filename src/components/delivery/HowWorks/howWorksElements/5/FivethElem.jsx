import styles from './fivethElem.module.css';

export default function FivethElem({ active }) {
    return (
        <div className={`${styles.imgWrapper} ${active ? styles.active : ''}`}>
            <img
                className={styles.fume}
                src="/images/howWorks/5/fume.png"
                alt="fume"
            />
            <img
                className={styles.car}
                src="/images/howWorks/5/car.png"
                alt="car"
            />
        </div>
    );
}
