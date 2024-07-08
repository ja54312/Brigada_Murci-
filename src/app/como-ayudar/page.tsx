//components
import { DeviceUnvailable } from "../../components/DeviceUnaviable"
import { BannerComoAyudar } from "../../components/comoAyudar/BannerComoAyudar"
import { InfoComoAyudar } from "../../components/comoAyudar/InfoComoAyudar"
//styles
import styles from './comoAyudar.module.sass'

export default function ComoAyudar() {
    return (
        <main className={styles.Main}>
            <DeviceUnvailable />
            <BannerComoAyudar />
            <InfoComoAyudar />
        </main>
    )
}