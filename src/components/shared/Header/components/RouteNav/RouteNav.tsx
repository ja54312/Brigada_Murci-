//components
import Image from 'next/image'
//Styles
import styles from './RouteNav.module.sass'

const urlImage = '/images/CaretLeft.svg'

export const RouteNav = () => {
    return (
        <div className={styles.RouteNav}>
            <div className={styles.containerImage}>
                <Image
                    src={urlImage}
                    alt='flecha breadcrumb'
                    fill
                />
            </div>
            <div className={styles.containerText}>
                <span>¿Cómo adoptar?</span>
            </div>
        </div>
    )
}
