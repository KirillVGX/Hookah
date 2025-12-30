import styles from './gets.module.css';
import { products } from '@/data/products.js';

export default function Gets() {
    return (
        <section className={styles.getSection}>
            <p className={styles.title}>
                What you’ll <span className='highlight'>get</span>:
            </p>
            <div className={styles.content}>
                <div className={styles.grid}>
                    {products.map((product) => (
                        <div
                            className={styles.productCard}
                            key={product.id}
                        >
                            <div className={styles.imgWrapper}>
                                <img
                                    className={styles.img}
                                    src={product.img}
                                    alt={product.text}
                                />
                            </div>
                            <p className={styles.description}>{product.text}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.order}>
                    <img
                        className={styles.orderBtn}
                        src="./images/gets/plus.svg"
                        alt="book"
                    />
                    <span className={styles.label}>
                        Short master class from hookah expert with insructions
                    </span>
                </div>
            </div>
        </section>
    );
}
