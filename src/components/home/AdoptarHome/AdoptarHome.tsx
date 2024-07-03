//styles
import styles from './AdoptarHome.module.sass'

export const AdoptarHome = () => {
    return (
        <section className={styles.AdoptarHome}>
            <div className={styles.AdoptarHomeTitle}>
                <span>¿Porqué adoptar con nosotros?</span>
            </div>
            <div className={styles.AdoptarHomeContainerCards}>
                <div className={styles.AdoptarHomeCard}>
                    <div className={styles.TitleCard}>Protocolo de Salud Completo</div>
                    <div className={styles.TextCard}>Cada animal rescatado recibe un protocolo de salud completo que incluye desparasitación, vacunas según su edad y esterilización. Este procedimiento es llevado a cabo por veterinarios titulados.</div>
                </div>
                <div className={styles.AdoptarHomeCard}>
                    <div className={styles.TitleCard}>Adopta un Meztizo NUPEC</div>
                    <div className={styles.TextCard}>Este año, formamos parte del programa Adopta un Meztizo de NUPEC; al concretar una adopción con nosotros recibirás un Kit de bienvenida para tu nuevo mejor amigo.</div>
                </div>
                <div className={styles.AdoptarHomeCard}>
                    <div className={styles.TitleCard}>Acompañamiento después de la adopción</div>
                    <div className={styles.TextCard}>Apoyo continuo para los nuevos dueños de mascotas.</div>
                </div>
            </div>
        </section>
    )
}
