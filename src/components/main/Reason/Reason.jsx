import styles from './reason.module.css'

const reasons = [
    {
        id: 1, src: './images/reasons/1.svg', alt: 'confeti', title: (
            <>
                Having a <span className={styles.selector}>party</span> with friends or <span className={styles.selector}>chilling</span> with your significant one?
            </>),
        text: 'No need to go to hookah lounge. Enjoy the hookah in comfort of your own place.'
    },
    {
        id: 2, src: './images/reasons/2.svg', alt: 'sunset', title: (
            <>
                Having a Florida <span className={styles.selector}>vacation</span>?
            </>),
        text: 'No need to have a hookah with you. We will deliver a hookah with all needed accessories. '
    },
    {
        id: 3, src: './images/reasons/3.svg', alt: 'hookah', title: (
            <>
                Want to smoke some hookah <span className={styles.selector}>where</span> you want and <span className={styles.selector}>when</span> you want?
            </>),
        text: 'You will get a hookah for 24 hours and with 3 fruit heads, which means you can smoke it 3 times wherever you want.'
    },
]

export default function Reason() {
    return (
        <section className={styles.reasonSection}>
            <h2 className={styles.head}>
                Why would you <span className={styles.selector}>want it</span>
            </h2>
            <div className={styles.container}>
                {reasons.map(reason => (
                    <div className={styles.reason} key={reason.id}>
                        <span className={styles.imgWrapper}>
                            <img className={styles.img} src={reason.src} alt={reason.alt} />
                        </span>
                        <h4 className={styles.title}>{reason.title}</h4>
                        <h5 className={styles.description}>{reason.text}</h5>
                    </div>
                ))}
            </div>
        </section>
    )
}