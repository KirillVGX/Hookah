import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import styles from './modal.module.css';
import { useState, useRef, useEffect } from 'react';
import Button from '@/components/hero/heroButton/HeroButton';

export default function Modal({ isModal, onClose, children, amount }) {
    useLockBodyScroll(isModal);

    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(true);
    const HEADS_COUNT = +amount;

    const [openIndex, setOpenIndex] = useState(null);

    const [flavors, setFlavors] = useState(Array(HEADS_COUNT).fill(''));

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        date: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('ORDER DATA:', formData);

        setStep(3);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isOpen]);
    

    if (!isModal) return null;

    return (
        <div
            className={styles.overlay}
            onClick={onClose}
        >
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <img
                        src="./icons/close.svg"
                        alt="close menu"
                    />
                </button>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    {step === 1 && (
                        <>
                            <h2 className={styles.title}>Step 1/2</h2>
                            <h5
                                className={styles.description}
                                style={{ marginBottom: '26px' }}
                            >
                                Leave your contacts
                            </h5>

                            <input
                                type="text"
                                name="name"
                                className={styles.input}
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="phone"
                                className={styles.input}
                                placeholder="Your phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                            <hr className={styles.hr} />

                            <div
                                className={styles.detailsWrapper}
                                ref={dropdownRef}
                            >
                                <button
                                    type="button"
                                    className={styles.listButton}
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    style={{
                                        marginBottom: isOpen ? 15 : 144.2,
                                    }}
                                >
                                    <p className={styles.openButtonText}>
                                        Details
                                    </p>
                                    <img
                                        src="./images/left-arrow.svg"
                                        alt="open menu"
                                        className={`${styles.openBtnImg} ${
                                            isOpen ? styles.rotate : ''
                                        }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className={styles.dropdown}>
                                        <input
                                            type="text"
                                            name="address"
                                            className={styles.input}
                                            placeholder="Delivery address"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />

                                        <input
                                            type="text"
                                            name="date"
                                            className={styles.input}
                                            placeholder="Delivery date and time"
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )}
                            </div>

                            <hr className={styles.hr} />
                            <p className={styles.yourOrder}>Your order:</p>
                            {children}

                            <Button
                                text="Next step"
                                type="button"
                                className={styles.primaryBtn}
                                maxWidth="100%"
                                onClick={() => setStep(2)}
                            ></Button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h2 className={styles.title}>Step 2/2</h2>
                            <h5
                                className={styles.description}
                                style={{ marginBottom: '4px' }}
                            >
                                Leave your contacts
                            </h5>
                            <h6 className={styles.info}>
                                You can choose several flavors in 1 list to mix
                                them
                            </h6>

                            <hr className={styles.hr} />

                            {flavors.map((value, index) => (
                                <div
                                    key={index}
                                    className={styles.detailsWrapper}
                                >
                                    <button
                                        type="button"
                                        className={styles.listButton}
                                        onClick={() =>
                                            setOpenIndex(
                                                openIndex === index
                                                    ? null
                                                    : index
                                            )
                                        }
                                    >
                                        <p className={styles.openButtonText}>
                                            Choose flavor for fruit head{' '}
                                            {index + 1}
                                        </p>

                                        <img
                                            src="./images/left-arrow.svg"
                                            alt="open"
                                            className={`${styles.openBtnImg} ${
                                                openIndex === index
                                                    ? styles.rotate
                                                    : ''
                                            }`}
                                        />
                                    </button>

                                    {openIndex === index && (
                                        <div className={styles.dropdown}>
                                            <input
                                                type="text"
                                                className={styles.input}
                                                placeholder="Flavor"
                                                value={value}
                                                onChange={(e) => {
                                                    const newFlavors = [
                                                        ...flavors,
                                                    ];
                                                    newFlavors[index] =
                                                        e.target.value;
                                                    setFlavors(newFlavors);
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}

                            <hr
                                className={styles.hr}
                                style={{ marginTop: 'auto' }}
                            />
                            <p className={styles.yourOrder}>Your order:</p>
                            {children}

                            <Button
                                text="Order service"
                                type="button"
                                className={styles.primaryBtn}
                                maxWidth="100%"
                            ></Button>
                        </>
                    )}
                </form>

                {step === 3 && (
                    <div className={styles.success}>
                        <h2>✅ Order successful</h2>
                        <p>Thank you! We will contact you soon.</p>

                        <button
                            type="button"
                            className={styles.primaryBtn}
                            onClick={() => {
                                setStep(1);
                                onClose();
                            }}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
