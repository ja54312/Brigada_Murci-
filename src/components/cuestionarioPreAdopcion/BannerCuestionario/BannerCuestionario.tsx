//component
import Image from 'next/image'
//styles
import styles from './BannerCuestionario.module.sass'

const urlImage = '/images/BannerCuestionario.svg'

export const BannerCuestionario = () => {
    return (
        <section className={styles.BannerCuestionario}>
            <div className={styles.containerMainImage}>
                <div className={styles.containerImage}>
                    <Image
                        src={urlImage}
                        alt='banner adopciones'
                        fill
                    />
                </div>
            </div>
            <div className={styles.containerText}>
                <p>El objetivo de este cuestionario es encontrar la condición óptima mascota - humano, de manera que ambos sean felices tras la adopción.</p>
            </div>
        </section>
    )
}
