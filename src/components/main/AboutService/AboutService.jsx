import styles from './aboutService.module.css';

export default function AboutService() {
    return (
        <section className={styles.AboutServiceSection}>
            <div className={styles.aboutWrapper}>
                <h1 className={styles.title}>
                    <span className={styles.highlight}>What</span> is it?
                </h1>
                <div className={styles.about}>
                    <h6 className={styles.desciption}>
                        Our company offers all-inclusive hookah catering service
                        for all kinds of events. We serve Miami, Fort
                        Lauderdale, the Keys, Palm Beach and surrounding areas.
                        Our hookah service is a perfect addition to any kind of
                        Private parties, Social or Corporate/Business events.
                    </h6>
                    <p className={styles.desciptionBold}>
                        We bring everything needed including the hookahs,
                        tobacco, charcoal and mouthpieces to your event. Our
                        hookah master remains onsite to service the hookahs for
                        the duration of your party.
                    </p>
                </div>
            </div>
            <div className={styles.slideInner}>
                <h4 className={styles.slide}>
                    We do all the work, so you can relax,
                    <span className={styles.highlight}>
                        enjoying your party and clouds of smoke with our hookah!
                    </span>
                </h4>
            </div>
        </section>
    );
}
