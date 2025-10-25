import styles from './inclusions.module.css';

const inclusions = [
    {
        id: 1,
        src: './images/inclusions/1.png',
        text: (
            <>
                Unlimited all-inclusive
                <br />
                service
            </>
        ),
        desc: 'We provide unlimited refills of tobacco, unlimited tendering of charcoals, an unlimited supply of hygienic mouth tips, and an unlimited attention to your guests from our hookah experts.',
    },
    {
        id: 2,
        src: './images/inclusions/2.png',
        text: (
            <>
                Exotic
                <br />
                experience
            </>
        ),
        desc: 'For many people hookah is still a mystery from the Middle East. Having hookahs on your event will make lasting impression on your guests.',
    },
    {
        id: 3,
        src: './images/inclusions/3.png',
        text: (
            <>
                Professionally made
                <br />
                hookahs
            </>
        ),
        desc: 'All of our hookah attendants have a big experience and know how to satisfy most sophisticated taste.',
    },
    {
        id: 4,
        src: './images/inclusions/4.png',
        text: (
            <>
                Beautiful
                <br />
                presentation
            </>
        ),
        desc: 'Not only our hookahs are highest quality, but also have a beautiful design. Each hookah is illuminated with a led light and in combination with real fruit head looks just awesome.',
    },
];

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
