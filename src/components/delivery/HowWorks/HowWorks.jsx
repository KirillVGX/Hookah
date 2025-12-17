import { useState } from 'react';
import styles from './howWorks.module.css';
import { steps } from '@/data/howWorksDelivery';

export default function HowWorks() {
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
