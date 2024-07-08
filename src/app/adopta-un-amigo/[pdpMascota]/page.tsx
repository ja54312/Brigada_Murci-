import { GetServerSideProps } from "next";


const PdpMAscota = ({ params }: { params: { PdpMascota: string } }) => {
    console.log("data", { params })
    return (
        <>
            <h2>adopta a un amigo</h2>
        </>
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