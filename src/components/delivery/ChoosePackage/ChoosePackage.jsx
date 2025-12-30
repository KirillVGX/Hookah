import styles from './choosePackage.module.css';
import HeroButton from '@/components/hero/heroButton/HeroButton';
import { plans } from '@/data/plans';

export default function ChoosePackage() {
    return (
        <section className={styles.choosePackageSection}>
            <h2 className={styles.head}>
                Choose <span className='highlight'>your package</span>
            </h2>
            <div className={styles.plansContainer}>
                {plans.map((plan) => (
                    <div
                        className={styles.plan}
                        key={plan.id}
                    >
                        <img src={plan.src} />
                        <div className={styles.product}>
                            <h4 className={styles.title}>{plan.title}</h4>
                            <h5 className={styles.bonus}>{plan.bonus}</h5>
                        </div>
                        <hr className={styles.hr} />
                        <p className={styles.description}>{plan.description}</p>
                        <div className={styles.prices}>
                            <h2 className={styles.price}>${plan.price}</h2>
                            <h5 className={styles.additional}>
                                ${plan.additional} additional day
                            </h5>
                        </div>
                        <hr className={styles.hr} />
                        <HeroButton
                            text={plan.buttonTxt}
                            maxWidth="320px"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}