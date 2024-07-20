//styles
import styles from './InfoPDP.module.sass'

export const InfoPDP = ({ mascota }) => {
    //console.log("InfoPDP", mascota)
    return (
        <section className={styles.InfoPDP}>
            <div className={styles.containerInfo}>
                <div className={styles.containerTitle}>
                    <span>Información:</span>
                </div>
                <div className={styles.containerText}>
                    <p>{mascota.desc}</p>
                </div>
            </div>
        </section>
    )
}
