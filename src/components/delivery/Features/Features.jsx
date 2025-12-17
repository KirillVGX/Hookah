import styles from './features.module.css';
import { useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const features = [
    {
        id: 1,
        alt: 'free',
        src: './images/features/1.svg',
        text: 'Free delivery in Miami and Fort Lauderdale',
    },
    {
        id: 2,
        alt: 'truck',
        src: './images/features/2.svg',
        text: 'Fast delivery. Most of deliveries take less than 90 minutes.',
    },
    {
        id: 3,
        alt: 'settings',
        src: './images/features/3.svg',
        text: 'Free setup - we will set up the hookah for you ',
    },
    {
        id: 4,
        alt: 'deposit',
        src: './images/features/4.svg',
        text: 'No deposit - no need to give us extra money',
    },
    {
        id: 5,
        alt: 'acai',
        src: './images/features/5.svg',
        text: '60+ Tobacco flavors to choose from',
    },
    {
        id: 6,
        alt: 'tobacco',
        src: './images/features/6.svg',
        text: 'Premium tobacco brands: Al-Fakher, Starbuzz, Tangiers, Adalya',
    },
    {
        id: 7,
        alt: 'hookah',
        src: './images/features/7.svg',
        text: 'High quality hookahs, always clean and taut',
    },
    {
        id: 8,
        alt: 'charcoal',
        src: './images/features/8.svg',
        text: 'Highest-quality natural coconut charcoals.',
    },
];

const reviews = [
    {
        id: 1,
        alt: 'user photo',
        photo: './images/photo.svg',
        name: 'Matthew',
        stars: 5,
        review: 'I got incredible pleasure smoking a hookah. Thanks to Hookah Puff team for perfect service! That was great',
    },
    {
        id: 2,
        alt: 'user photo',
        photo: './images/photo.svg',
        name: 'Matthew',
        stars: 4,
        review: 'I got incredible pleasure smoking a hookah. Thanks to Hookah Puff team for perfect service! That was great',
    },
    {
        id: 3,
        alt: 'user photo',
        photo: './images/photo.svg',
        name: 'Matthew',
        stars: 3,
        review: 'I got incredible pleasure smoking a hookah. Thanks to Hookah Puff team for perfect service! That was great',
    },
];

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
