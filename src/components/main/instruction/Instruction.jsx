import styles from './instruction.module.css'

const steps = [
    { text: "Order hookah delivery to your home, to the hotel room or any place you want.", id: 1 },
    { text: "We will deliver complete hookah set with all accessories to you, start it up and show how to use it", id: 2 },
    { text: "All you'll have to do is to relax, enjoying the hookah!", id: 3 }
];

export default function Instruction() {
    return (
        <section className={styles.instruction}>
            {steps.map(step => (
                <div className={styles.block} key={step.id}>
                    <h5 className={styles.description}>{step.text}</h5>
                    <span className={styles.number}>
                        <p className={styles.numberText}>
                            {step.id}
                        </p>
                    </span>
                </div>
            ))}
        </section>
    )
}