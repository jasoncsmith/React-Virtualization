import styles from './index.module.css';

export default function Loader({ className = '' }: { className?: string }) {
    return (
        <div className={styles['loader-container']}>
            <div className={styles.loader} />
        </div>
    );
}
