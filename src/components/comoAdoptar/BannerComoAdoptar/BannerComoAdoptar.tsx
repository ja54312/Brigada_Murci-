//components
import Image from 'next/image'
//styles
import styles from './BannerComoAdoptar.module.sass'

const urlImage = '/images/characters.svg'

export const BannerComoAdoptar = () => {
    return (
        <section className={styles.BannerComoAdoptar}>
            <div className={styles.containerText}>
                <span>¿Cómo adoptar?</span>
            </div>
            <div className={styles.containerImage}>
                <Image
                    src={urlImage}
                    alt='banner como adoptar'
                    fill
                />
            </div>
        </section>
    )
}
