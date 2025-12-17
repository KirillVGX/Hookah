import { useInView } from '@/hooks/useInView';
import styles from './reveal.module.css';

export default function Reveal({
    children,
    className = '',
    rootMargin = '120px',
}) {
    const { ref, isVisible } = useInView({ rootMargin });

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${
                isVisible ? styles.show : ''
            } ${className}`}
        >
            {children}
        </div>
    );
}
