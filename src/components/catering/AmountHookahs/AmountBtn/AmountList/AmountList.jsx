import styles from './amountList.module.css';

export default function AmountList({ buttons, active, onSelect }) {
    return (
        <ul
            className={`${styles.dropdown} ${
                active ? styles.dropdownActive : ''
            }`}
            role="listbox"
        >
            {buttons.map((btn) => (
                <li
                    key={btn.id}
                    className={`${styles.listItem} ${
                        active?.id === btn.id ? styles.activeItem : ''
                    }`}
                    onClick={() => onSelect(btn)}
                    role="option"
                    aria-selected={active?.id === btn.id}
                >
                    <div className={styles.listHeader}>
                        <h5 className={styles.listTitle}>{btn.btnTxt}</h5>
                        {active?.id === btn.id && (
                            <img
                                src="./images/select.svg"
                                alt="selected"
                                className={styles.itemSelected}
                            />
                        )}
                    </div>

                    <div className={styles.listInfo}>
                        <p className={styles.listDesciption}>{btn.amountD}</p>
                        <p className={styles.listDesciption}>{btn.servedD}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
