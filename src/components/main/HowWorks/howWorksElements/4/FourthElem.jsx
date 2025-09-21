import styles from './fourthElem.module.css';

const iconsData = [
    {
        src: '/images/howWorks/4/1.svg',
        alt: 'Pay Pal',
        className: styles.pp,
    },
    {
        src: '/images/howWorks/4/2.svg',
        alt: 'Dollar',
        className: styles.dollar,
    },
    {
        src: '/images/howWorks/4/3.svg',
        alt: 'Money',
        className: styles.money,
    },
    {
        src: '/images/howWorks/4/4.svg',
        alt: 'Card',
        className: styles.card,
    },
];

export default function FourthElem() {
    return (
        <div className={styles.imgWrapper}>
            <img
                className={styles.fume}
                src="/images/howWorks/4/fume.png"
                alt="fume"
            />
            <div className={styles.gridContainer}>
                {iconsData.map((icon, index) => (
                    <span
                        className={styles.svgWrapper}
                        key={index}
                    >
                        <img
                            className={`${styles.gridElem} ${icon.className}`}
                            src={icon.src}
                            alt={icon.alt}
                        />
                    </span>
                ))}
            </div>
        </div>
    );
}
