import styles from './reason.module.css';
import { reasons } from '@/data/reasons'

export default function Reason() {
    return (
        <section className={styles.reasonSection}>
            <h2 className={styles.head}>
                Why would you <span className={styles.selector}>want it</span>
            </h2>
            <div className={styles.container}>
                {reasons.map((reason) => (
                    <div
                        className={styles.reason}
                        key={reason.id}
                    >
                        <span className={styles.imgWrapper}>
                            <img
                                className={styles.img}
                                src={reason.src}
                                alt={reason.alt}
                            />
                        </span>
                        <h4 className={styles.title}>{reason.title}</h4>
                        <hr className={styles.hr} />
                        <h5 className={styles.description}>{reason.text}</h5>
                    </div>
                ))}
            </div>
        </section>
    );
}
