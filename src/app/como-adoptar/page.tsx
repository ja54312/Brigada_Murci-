//components
import { DeviceUnvailable } from "../../components/DeviceUnaviable"
import { HeroComoAdoptar } from "../../components/comoAdoptar/HeroComoAdoptar"
import { RequisitosComoAdoptar } from "../../components/comoAdoptar/RequisitosComoAdoptar"
//styles
import styles from './comoAdoptar.module.sass'

export default function ComoAdoptar() {

    return (
        <main className={styles.Main}>
            <DeviceUnvailable />
            <HeroComoAdoptar />
            <RequisitosComoAdoptar />
        </main>
    )
}