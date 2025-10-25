import styles from './gallery.module.css';

export default function Gallery() {
    return (
        <section className={styles.gallerySection}>
            <div className={styles.titleBox}>
                <h2 className={styles.title}>
                    Instagram <span className={styles.highlight}>photos</span>
                </h2>
                <button className={styles.button}>
                    Visit our instagram page
                </button>
            </div>
            <div className={styles.gallery}>
                <img className={styles.img1} src="./images/gallery/1.png" />
                <img className={styles.img2} src="./images/gallery/2.png" />
                <img className={styles.img3} src="./images/gallery/3.png" />
                <img className={styles.img4} src="./images/gallery/4.png" />
                <img className={styles.img5} src="./images/gallery/5.png" />
            </div>
        </section>
    );
}
