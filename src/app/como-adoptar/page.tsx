//components
import { DeviceUnvailable } from "../../components/DeviceUnaviable"
import { HeroComoAdoptar } from "../../components/comoAdoptar/HeroComoAdoptar"
import { RequisitosComoAdoptar } from "../../components/comoAdoptar/RequisitosComoAdoptar"
import { BannerBotomComoAdoptar } from "../../components/comoAdoptar/BannerBotomComoAdoptar"
//styles
import styles from './comoAdoptar.module.sass'

export default function ComoAdoptar() {

    return (
        <main className={styles.Main}>
            <DeviceUnvailable />
            <HeroComoAdoptar />
            <RequisitosComoAdoptar />
            <BannerBotomComoAdoptar />
        </main>
    )
}