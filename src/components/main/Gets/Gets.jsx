import styles from './gets.module.css'

const products = [
    { id: 1, img: './images/gets/1.svg', text: 'Hookah' },
    { id: 2, img: './images/gets/2.svg', text: 'Flavored tobacco' },
    { id: 3, img: './images/gets/3.svg', text: '3 Fruit heads' },
    { id: 4, img: './images/gets/4.svg', text: 'Coals' },
    { id: 5, img: './images/gets/5.svg', text: 'Electric burner' },
    { id: 6, img: './images/gets/6.svg', text: 'Plastic Mouth Tips' },
    { id: 7, img: './images/gets/7.svg', text: 'Tongs' },
    { id: 8, img: './images/gets/8.svg', text: 'LED light' },
    { id: 9, img: './images/gets/9.svg', text: 'Disposable Hose' },
]

export default function Main() {
    return (
        <section className={styles.getSection}>
            <p className={styles.title}>What<br /> you’ll <span className={styles.selector}>get</span>:</p>
            <div className={styles.content}>
                <div className={styles.grid}>
                    {products.map(product => (
                        <div className={styles.productCard} key={product.id}>
                            <div className={styles.imgWrapper}>
                                <img className={styles.img} src={product.img} alt={product.text} />
                            </div>
                            <p className={styles.description}>{product.text}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.order}>
                    <img className={styles.orderBtn} src="./images/gets/plus.svg" alt="book" />
                    <span className={styles.label}>
                        Short master class from hookah expert with insructions
                    </span>
                </div>
            </div>
        </section>
    )
}