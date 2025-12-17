import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import styles from './modal.module.css';
import { useState, useRef, useEffect } from 'react';

export default function Modal({ isModal, onClose, children }) {
    useLockBodyScroll(isModal);

    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    
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
                <h2 className={styles.title}>Leave your contacts</h2>
                <form className={styles.form}>
                    <label
                        htmlFor="name"
                        className={styles.visuallyHidden}
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                    />
                    <label
                        htmlFor="phone"
                        className={styles.visuallyHidden}
                    >
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="text"
                    />
                    <hr />
                    <p>Your order:</p>
                    <div className={styles.order}>{children}</div>
                    <hr />
                    <button
                        type="button"
                        className={styles.list}
                        onClick={(e) => {
                            e.stopPropagation(); 
                            setIsOpen((prev) => !prev);
                        }}
                    >
                        <p className={styles.openButtonText}>Details</p>
                        <img
                            src="./images/left-arrow.svg"
                            alt="open menu"
                            className={`${styles.openBtnImg} ${
                                isOpen ? styles.rotate : ''
                            }`}
                        />
                    </button>

                    {isOpen && (
                        <ul
                            ref={dropdownRef}
                            className={styles.dropdown}
                            role="listbox"
                        >
                            <label
                                htmlFor="address"
                                className={styles.visuallyHidden}
                            >
                                Address
                            </label>
                            <input
                                id="address"
                                type="text"
                            />
                            <label
                                htmlFor="date"
                                className={styles.visuallyHidden}
                            >
                                Date
                            </label>
                            <input
                                id="date"
                                type="text"
                            />
                            <label
                                htmlFor="message"
                                className="visuallyHidden"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Your message"
                            ></textarea>
                        </ul>
                    )}
                </form>
            </div>
        </div>
    );
}
