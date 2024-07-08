//components
import Image from 'next/image'
//styles
import styles from './BannerComoAyudar.module.sass'

const urlImage = "/images/_Layer_.svg"

export const BannerComoAyudar = () => {
    return (
        <section className={styles.BannerComoAyudar}>
            <div className={styles.containerTitle}>
                <span>Con donaciones</span>
            </div>
            <div className={styles.containerImages}>
                <Image
                    src={urlImage}
                    alt='banner como ayudar'
                    fill
                />
            </div>
        </section>
    )
}
