import styles from './header.module.css';

export default function Header () {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <span className={styles.headerTitlePart}> SpaceX </span> Launch Programs
            </div>
        </div>
    );
}