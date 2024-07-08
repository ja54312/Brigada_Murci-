//components
import Image from 'next/image'
//styles
import styles from './ListComoAdoptar.module.sass'

const urlImage = "/images/LiVector.svg"

export const ListComoAdoptar = () => {
    return (
        <section className={styles.ListComoAdoptar}>
            <div className={styles.containerOptions}>
                <div className={styles.containerOption}>
                    <div className={styles.containerImage}>
                        <Image
                            src={urlImage}
                            alt='punto de lista'
                            fill
                        />
                    </div>
                    <span>Encuenta a tu mascota</span>
                </div>
                <div className={styles.containerOption}>
                    <div className={styles.containerImage}>
                        <Image
                            src={urlImage}
                            alt='punto de lista'
                            fill
                        />
                    </div>
                    <span>Llena un formulario de adopción</span>
                </div>
                <div className={styles.containerOption}>
                    <div className={styles.containerImage}>
                        <Image
                            src={urlImage}
                            alt='punto de lista'
                            fill
                        />
                    </div>
                    <span>Y dale la bienvenida al nuevo miembro de la familia</span>
                </div>
            </div>
        </section>
    )
}
