//styles
import styles from './PadrinoPDP.module.sass'

export const PadrinoPDP = () => {
    return (
        <section className={styles.PadrinoPDP}>
            <div className={styles.containerPadrino}>
                <div className={styles.containerTitle}>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className={styles.containerText}>
                    <p>Lorem ipsum dolor sit amet consectetur. Dui amet malesuada lectus ac sagittis dictum.</p>
                </div>
                <div className={styles.containerButton}>
                    <button>Quiero ser su padrino</button>
                </div>
            </div>
        </section>
    )
}
