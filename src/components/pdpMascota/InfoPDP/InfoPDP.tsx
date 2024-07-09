//styles
import styles from './InfoPDP.module.sass'

export const InfoPDP = () => {
    return (
        <section className={styles.InfoPDP}>
            <div className={styles.containerInfo}>
                <div className={styles.containerTitle}>
                    <span>Información:</span>
                </div>
                <div className={styles.containerText}>
                    <p>Fue atacada por un arma de fuego en la cara. Convive con otros perritos, cachorros y adultos.</p>
                </div>
            </div>
        </section>
    )
}
