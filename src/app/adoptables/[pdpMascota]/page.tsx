//components
import { DeviceUnvailable } from "../../../components/DeviceUnaviable";
import { HeroPDP } from "../../../components/pdpMascota/HeroPDP";
import { StatsPDP } from "../../../components/pdpMascota/StatsPDP";
import { InfoPDP } from "../../../components/pdpMascota/InfoPDP";
import { ButtonPDP } from "../../../components/pdpMascota/ButtonPDP";
import { PadrinoPDP } from "../../../components/pdpMascota/PadrinoPDP";
import { GetServerSideProps } from "next";
//database
import dataPerritos from "../../../database/dataLocal";
//styles
import styles from './pdpMascota.module.sass'


const PdpMAscota = ({ params }: { params: { pdpMascota: string } }) => {

    const idMascota: string = params.pdpMascota

    const findPet = (id: string) => {
        return dataPerritos.find((pet) => pet.id === id)
    }

    const mascota = findPet(idMascota)
    //console.log(mascota)

    return (
        <main className={styles.Main}>
            <DeviceUnvailable />
            <HeroPDP mascota={mascota} />
            <StatsPDP mascota={mascota} />
            <InfoPDP mascota={mascota} />
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