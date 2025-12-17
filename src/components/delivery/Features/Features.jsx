import styles from './features.module.css';
import { useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { features } from '@/data/features';
import { reviews } from '@/data/reviews';

export default function Features() {
    const isLaptop = useMediaQuery('(max-width: 1225px)');
    const [index, setIndex] = useState(0);

    const showSlide = (i) => {
        const newIndex = (i + reviews.length) % reviews.length;
        setIndex(newIndex);
    };

    return (
        <section className={styles.featuresSection}>
            <div className={styles.features}>
                <div className={styles.head}>
                    <h2 className={styles.title}>Why order from us</h2>
                    <hr className={styles.hr} />
                </div>
                <div className={styles.featuresContainer}>
                    {features.map((feature) => (
                        <div
                            className={styles.feature}
                            key={feature.id}
                        >
                            <span className={styles.svgWrapper}>
                                <img
                                    className={styles.svg}
                                    src={feature.src}
                                    alt={feature.alt}
                                />
                            </span>
                            <h5 className={styles.description}>
                                {feature.text}
                            </h5>
                        </div>
                    ))}
                </div>
            </div>

            {!isLaptop && (
                <div className={styles.reviewsContainer}>
                    <h2 className={styles.reviewsTitle}>Reviews</h2>
                    <div className={styles.reviewCardWrapper}>
                        {reviews.map((review) => (
                            <div
                                className={styles.reviewCard}
                                key={review.id}
                            >
                                <div className={styles.userInfo}>
                                    <img
                                        className={styles.userPhoto}
                                        src={review.photo}
                                        alt={review.alt}
                                    />
                                    <div className={styles.nameAndStars}>
                                        <h4 className={styles.name}>
                                            {review.name}
                                        </h4>
                                        <div className={styles.stars}>
                                            {Array.from({
                                                length: review.stars,
                                            }).map((_, i) => (
                                                <img
                                                    key={i}
                                                    src="./images/star.svg"
                                                    alt="star"
                                                    className={styles.starIcon}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className={styles.review}>{review.review}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {isLaptop && (
                <div className={styles.sliderContainer}>
                    <h2 className={styles.reviewsTitle}>Reviews</h2>
                    <div className={styles.slider}>
                        <button
                            className={styles.btn}
                            onClick={() => showSlide(index - 1)}
                        >
                            <img
                                src="./images/left-arrow.svg"
                                alt="left arrow"
                                className={styles.btnPrev}
                            />
                        </button>
                        <div className={styles.reviewsContainerMobile}>
                            <div
                                className={styles.slides}
                                style={{
                                    transform: `translateX(-${index * 100}%)`,
                                    display: 'flex',
                                    transition:
                                        'transform 0.4s cubic-bezier(.22,.9,.3,1)',
                                }}
                            >
                                {reviews.map((review) => (
                                    <div
                                        className={styles.reviewCardMobile}
                                        key={review.id}
                                    >
                                        <div className={styles.userInfo}>
                                            <img
                                                className={styles.userPhoto}
                                                src={review.photo}
                                                alt={review.alt}
                                            />
                                            <div
                                                className={styles.nameAndStars}
                                            >
                                                <h4 className={styles.name}>
                                                    {review.name}
                                                </h4>
                                                <div className={styles.stars}>
                                                    {Array.from({
                                                        length: review.stars,
                                                    }).map((_, i) => (
                                                        <img
                                                            key={i}
                                                            src="./images/star.svg"
                                                            alt="star"
                                                            className={
                                                                styles.starIcon
                                                            }
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className={styles.review}>
                                            {review.review}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            className={styles.btn}
                            onClick={() => showSlide(index + 1)}
                        >
                            <img
                                src="./images/right-arrow.svg"
                                alt="right arrow"
                                className={styles.btnNext}
                            />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
