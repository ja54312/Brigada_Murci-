//components
import { BannerComoAdoptar } from '../BannerComoAdoptar'
import { ListComoAdoptar } from '../ListComoAdoptar'
//styles
import styles from './HeroComoAdoptar.module.sass'

export const HeroComoAdoptar = () => {
    return (
        <section className={styles.HeroComoAdoptar}>
            <BannerComoAdoptar />
            <ListComoAdoptar />
        </section>
    )
}
