//components
import Image from 'next/image'
//styles
import styles from './BannerAdoptame.module.sass'

const urlImage = '/images/Benefits Image  --dalle.png'

export const BannerAdoptame = () => {
    return (
        <section className={styles.BannerAdoptame}>
            <div className={styles.BannerAdoptameContainerImg}></div>
            <Image
                src={urlImage}
                alt='banner adoptame'
                fill
            />
        </section>
    )
}
