//components
import { DeviceUnvailable } from "../../components/DeviceUnaviable"
import { BannerCuestionario } from "../../components/cuestionarioPreAdopcion/BannerCuestionario"
import { RequisitosAdopcion } from "../../components/cuestionarioPreAdopcion/RequisitosAdopcion"
import { FormAdopcion } from "../../components/cuestionarioPreAdopcion/FormAdopcion"
//styles
import styles from './CuestionarioPreAdopcion.module.sass'

export default function CuestionarioPreAdopcion() {
    return (
        <main className={styles.Main}>
            <DeviceUnvailable />
            <BannerCuestionario />
            <RequisitosAdopcion />
            <FormAdopcion />
        </main>
    )
}