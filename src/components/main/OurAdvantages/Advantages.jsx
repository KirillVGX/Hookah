import styles from './advantages.module.css';

const info = [
    {
        id: 1,
        num: '5 years',
        desc: 'Of experience is the minimum for our hookah masters.',
    },
    {
        id: 2,
        num: '100+',
        desc: 'Small parties and big events had been served.',
    },
    {
        id: 3,
        num: 'Since 2015',
        desc: 'We work to satisfy even the most sophisticated tastes.',
    },
];

const features = [
    {
        id: 1,
        icon: './images/advantages/1.svg',
        alt: 'hookah',
        txt: 'Top-notch hookah pipes made of glass, stainless steel and wood.',
        desc: 'Beautiful presentation and a pleasure from smoking.',
    },
    {
        id: 2,
        icon: './images/advantages/2.svg',
        alt: 'tobacco',
        txt: 'Premium tobacco brands such as Fumari, Al-Fakher, Starbuzz, Tangiers, Lavoo, and Azur.',
        desc: 'Unbeatable selection of flavors and mixes.',
    },
    {
        id: 3,
        icon: './images/advantages/3.svg',
        alt: 'charcoal',
        txt: 'Highest-quality natural coconut charcoals.',
        desc: 'Our hookahs are never harsh and always smoke very smooth',
    },
    {
        id: 4,
        icon: './images/advantages/4.svg',
        alt: 'clock',
        txt: 'Fruit heads changed every hour. ',
        desc: 'Tobacco is packed into the real fruit to make smoking more smooth and juicy.',
    },
];

export default function Advantages() {
    return (
        <section className={styles.advantagesSection}>
            <div className={styles.head}>
                <h2 className={styles.title}>
                    Why choose <span className={styles.highlight}>us</span>
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
