//components
import Image from 'next/image'
//styles
import styles from './BannerBotomComoAdoptar.module.sass'

const urlImage = '/images/Family.png'

export const BannerBotomComoAdoptar = () => {
    return (
        <section className={styles.BannerBotomComoAdoptar}>
            <div className={styles.containerBannerBotom}>
                <div className={styles.contaienrImage}>
                    <Image
                        src={urlImage}
                        alt='Familia adoptando'
                        fill
                    />
                </div>
                <div className={styles.containerText}>
                    <div className={styles.containerTitle}>
                        <span>Recuerda:</span>
                    </div>
                    <div className={styles.containertext}>
                        <p>Se realizará un seguimiento después de la adopción para estar seguros que el animalito ha encontrado a la familia correcta.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
