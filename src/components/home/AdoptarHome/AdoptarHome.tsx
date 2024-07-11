//styles
import styles from './AdoptarHome.module.sass'

export const AdoptarHome = () => {
    return (
        <section className={styles.AdoptarHome}>
            <div className={styles.AdoptarHomeTitle}>
                <span>¿Por qué adoptar con nosotros?</span>
            </div>
            <div className={styles.AdoptarHomeContainerCards}>
                <div className={styles.AdoptarHomeCard}>
                    <div className={styles.TitleCard}>
                        <span>Adoptables 100% sanos.</span>
                    </div>
                    <div className={styles.TextCard}>
                        <p>Cada animal rescatado recibe atención médica especializada por veterinarios titulados, desde el momento de su rescate y hasta que llega a su nuevo hogar, todos nuestros adoptables cuentan con un protocolo de salud vigente que incluye: esterilización, desparasitasión y vacunas acorde a su edad. </p>
                    </div>
                </div>
                <div className={styles.AdoptarHomeCard}>
                    <div className={styles.TitleCard}>
                        <span>Orgullo Mextizo de NUPEC.</span>
                    </div>
                    <div className={styles.TextCard}>
                        <p>Desde 2024, formamos parte del programa Orgullo Mextizo de NUPEC, al concretar una adopción con nosotros recibirás un kit de bienvenida para tu nuevo mejor amigo.</p>
                    </div>
                </div>
                <div className={styles.AdoptarHomeCard}>
                    <div className={styles.TitleCard}>
                        <span>Acompañamiento después de la</span>
                        <span>adopción.</span>
                    </div>
                    <div className={styles.TextCard}>
                        <p>Para asegurar el bienestar del animal y la satisfacción de la nueva familia. Este proceso permite verificar que nuestros adoptables se estén adaptando adecuadamente a su nuevo hogar y que sus necesidades físicas y emocionales estén siendo atendidas.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
