import styles from './footer.module.css';

export default function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <a href='https://github.com/SiddhantPainter' className={styles.links}>
                    <i className="fa fa-github"> </i>
                </a>
            </div>
            <div className={styles.author}>
                Developed by: Siddhant Painter
            </div>
            <div>
                <a href='https://www.linkedin.com/in/sid-p/' className={styles.links}>
                    <i className="fa fa-linkedin-square"> </i>
                </a>
            </div>
        </div>
    );
}