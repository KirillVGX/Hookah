import styles from './secondElem.module.css';

export default function FirstElem({ active }) {
    return (
        <div className={`${styles.imgWrapper} ${active ? styles.active : ''}`}>
            <img
                className={styles.fume}
                src="/images/howWorks/1/fume.png"
                alt="fume"
            />
            <img
                className={styles.phone}
                src="/images/howWorks/2/phone.png"
                alt="phone"
            />
        </div>
    );
}
