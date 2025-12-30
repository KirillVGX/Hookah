import styles from './instruction.module.css';
import { instructions as steps } from '@/data/instructions';

export default function Instruction() {
    return (
        <section className={styles.instructionSection}>
            {steps.map((step) => (
                <div
                    className={styles.block}
                    key={step.id}
                >
                    <h5 className={styles.description}>{step.text}</h5>
                    <span className={styles.number}>
                        <p className={styles.numberText}>{step.id}</p>
                    </span>
                </div>
            ))}
            <hr className={styles.hr} />
            <div className={styles.block}>
                <h5 className={styles.description}>
                    All you'll have to do is to relax, enjoying the hookah!
                </h5>
                <span className={styles.number}>
                    <p className={styles.numberText}>3</p>
                </span>
            </div>
        </section>
    );
}
