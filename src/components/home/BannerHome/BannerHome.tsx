//components
import Image from 'next/image'
//styles
import styles from './BannerHome.module.sass'

const urlBanner = '/images/banner-home-2 2.png'

export const BannerHome = () => {
    return (
        <section className={styles.BannerHome}>
            <div className={styles.BannerHomeContainer}>
                <Image
                    src={urlBanner}
                    alt="bannerHome"
                    fill
                />
            </div>
        </section>
    )
}
