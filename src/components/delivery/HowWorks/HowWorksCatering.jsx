import { useState } from 'react';
import styles from './howWorks.module.css';
import FirstElem from './howWorksElements/1/FirstElem';
import SecondElem from './howWorksElements/2/SecondElem';
import SixthElem from './howWorksElements/6/SixthElem';
import FourthElem from './howWorksElements/4/FourthElem';
import FivethElem from './howWorksElements/5/FivethElem';

const steps = [
    {
        Component: FirstElem,
        description:
            'Choose how many hookahs you need and fill out the form with your info',
        id: 1,
    },
    {
        Component: SecondElem,
        description:
            'We call you back in a shortest time to confirm your order.',
        id: 2,
    },
    {
        Component: FivethElem,
        description: 'We come next day to pick up the hookah.',
        id: 3,
    },
    {
        Component: SixthElem,
        description:
            'During the party, our hookah attendants bring ready-to-smoke hookahs to the tables, change the charcoals and refill the flavors.',
        id: 4,
    },
    {
        Component: FourthElem,
        description:
            'You pay for the hookah rental. We accept cash, credit cards and PayPal and Cashapp',
        id: 5,
    },
];

export default function HowWorksCatering() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className={styles.howWorks}>
            <h1 className={styles.title}>
                How it <span className={styles.selector}>works</span>
            </h1>
            <div className={styles.container}>
                {steps.map(({ id, Component, description }) => (
                    <div
                        className={styles.howWorkElement}
                        key={id}
                        onMouseEnter={() => setHoveredId(id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <div>
                            <Component active={hoveredId === id} />
                        </div>
                        <p className={styles.description}>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
