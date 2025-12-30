import styles from './advantages.module.css';
import { info } from '@/data/info'
import { advantages as features } from '@/data/advantages'

export default function Advantages() {
    return (
        <section className={styles.advantagesSection}>
            <div className={styles.head}>
                <h2 className={styles.title}>
                    Why choose <span className='highlight'>us</span>
                </h2>
                <div className={styles.info}>
                    {info.map((inf) => (
                        <div
                            className={styles.infoBlock}
                            key={inf.id}
                        >
                            <h4 className={styles.stat}>{inf.num}</h4>
                            <hr className={styles.hr} />
                            <h6 className={styles.statText}>{inf.desc}</h6>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.featuresBlock}>
                {features.map((f) => (
                    <div
                        className={styles.feature}
                        key={f.id}
                    >
                        <span className={styles.imgPudle}>
                            <img
                                className={styles.img}
                                src={f.icon}
                                alt={f.alt}
                            />
                        </span>
                        <div className={styles.featureInfo}>
                            <h5 className={styles.featureText}>{f.txt}</h5>
                            <h6 className={styles.featureDesciption}>{f.desc}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
