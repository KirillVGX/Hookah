import styles from './amountSlider.module.css';
import { useSlider } from '../../../../hooks/useSlider';

export default function Slider() {
    const { sliderRef, thumbRef, fillRef, value } = useSlider(5);

    return (
        <div className={styles.amountCatering}>
            <div className={styles.time}>
                <h6 className={styles.timeLabel}>
                    Choose the hookah event duration:
                </h6>
                <h6 className={styles.hours}>{value} hours</h6>
            </div>
            <div
                ref={sliderRef}
                className={styles.slider}
            >
                <div
                    ref={fillRef}
                    className={styles.fill}
                />
                <div
                    ref={thumbRef}
                    className={styles.thumb}
                />
                <div className={styles.sliderMarks}>
                    <span data-value="1"></span>
                    <span data-value="2"></span>
                    <span data-value="3"></span>
                    <span data-value="4"></span>
                    <span data-value="5"></span>
                </div>
            </div>
        </div>
    );
}
