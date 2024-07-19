//components
import { DeviceUnvailable } from "../../../components/DeviceUnaviable";
import { HeroPDP } from "../../../components/pdpMascota/HeroPDP";
import { StatsPDP } from "../../../components/pdpMascota/StatsPDP";
import { InfoPDP } from "../../../components/pdpMascota/InfoPDP";
import { ButtonPDP } from "../../../components/pdpMascota/ButtonPDP";
import { PadrinoPDP } from "../../../components/pdpMascota/PadrinoPDP";
import { GetServerSideProps } from "next";
//styles
import styles from './pdpMascota.module.sass'


const PdpMAscota = ({ params }: { params: { PdpMascota: string } }) => {
    //console.log("data", { params })
    return (
        <main className={styles.Main}>
            <DeviceUnvailable />
            <HeroPDP />
            <StatsPDP />
            <InfoPDP />
            <ButtonPDP />
            <PadrinoPDP />
        </main>
    )
}

export default PdpMAscota

// export const getServerSideProps: GetServerSideProps = async (context) => {

//     const IdPage = context?.query?.pdpMascota;
//     console.log(IdPage)

//     let data = 'holi'

//     return {
//         props: {
//             data: data,
//         },
//     };
// }