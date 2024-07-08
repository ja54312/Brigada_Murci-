//components
import { HeroPDP } from "../../../components/pdpMascota/HeroPDP";
import { StatsPDP } from "../../../components/pdpMascota/StatsPDP";
import { InfoPDP } from "../../../components/pdpMascota/InfoPDP";
import { PadrinoPDP } from "../../../components/pdpMascota/PadrinoPDP";
import { GetServerSideProps } from "next";


const PdpMAscota = ({ params }: { params: { PdpMascota: string } }) => {
    //console.log("data", { params })
    return (
        <main>
            <HeroPDP />
            <StatsPDP />
            <InfoPDP />
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