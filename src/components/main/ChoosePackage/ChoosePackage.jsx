import styles from './choosePackage.module.css'
import HeroButton from '../../header/hero/heroButton/HeroButton'

const plans = [
    { id: 1, src: './images/plans/1.svg', title: '1 hookah', bonus: '+ 3 tobacco filled fruit heads', description: '1 complete hookah set with all needed accessories', price: 75, additional: 30, buttonTxt: 'Order 1 hookah' },
    { id: 2, src: './images/plans/2.svg', title: '2 hookah', bonus: '+ 6 tobacco filled fruit heads', description: '2 complete hookah set with all needed accessories', price: 120, additional: 50, buttonTxt: 'Order 2 hookah' },
    { id: 3, src: './images/plans/3.svg', title: '3 hookah', bonus: '+ 9 tobacco filled fruit heads', description: '3 complete hookah set with all needed accessories', price: 160, additional: 70, buttonTxt: 'Order 3 hookah' },
]

export default function ChoosePackage() {
    return (
        <section className={styles.choosePackageSection}>
            <h2 className={styles.head}>Choose <span className={styles.selector}>your package</span></h2>
            <div className={styles.plansContainer}>
                {plans.map(plan => (
                    <div className={styles.plan} key={plan.id}>
                        <img src={plan.src} />
                        <div className={styles.product}>
                            <h4 className={styles.title}>{plan.title}</h4>
                            <h5 className={styles.bonus}>{plan.bonus}</h5>
                        </div>
                        <hr className={styles.hr} />
                        <p className={styles.description}>{plan.description}</p>
                        <div className={styles.prices}>
                            <h2 className={styles.price}>${plan.price}</h2>
                            <h5 className={styles.additional}>${plan.additional} additional day</h5>
                        </div>
                        <hr className={styles.hr} />
                        <HeroButton text={plan.buttonTxt} />
                    </div>
                ))}
            </div>
        </section>
    )
}