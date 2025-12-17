import styles from './inclusions.module.css';
import { inclusions } from '@/data/inclusions'

export default function Inclusions() {
    return (
        <section className={styles.inclusionsSection}>
            <h2 className={styles.title}>
                What you’ll <span className={styles.highlight}>get</span>
            </h2>
            <div className={styles.inclusions}>
                {inclusions.map((arr) => (
                    <div
                        className={styles.block}
                        key={arr.id}
                    >
                        <img
                            className={styles.img}
                            src={arr.src}
                        />
                        <div className={styles.txtContainer}>
                            <h6 className={styles.text}>{arr.text}</h6>
                            <h6 className={styles.description}>{arr.desc}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
