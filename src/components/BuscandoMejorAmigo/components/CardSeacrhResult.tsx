"use client"
//Librerias
import React from 'react'
//Hooks
import { useRouter } from "next/router";
//Component
import Image from 'next/image'
import ContadorDiasDeEspera from '@/components/ContadorDiasDeEspera/ContadorDiasDeEspera'
//Styles
import styles from '../BuscandoMejorAmigo.module.css'
//Models
interface CardSeacrhResultProps {
    data:any
}

const CardSeacrhResult:React.FC<CardSeacrhResultProps> = ({data}) => {
    const router = useRouter();
    //console.log(0,data)
    const goToPDP = (id:string) =>  {
        //console.log('click',id)
        router.push(`${id}`)
    }
  return (
    <div className={styles.cardSearchResult} onClick={()=>goToPDP(data?._id)}>
        <div className={styles.containerInfoSearchResult}>
            <div className={styles.containerImageCard}>
                <Image src={data?.imagenPet} alt='mascota' width={132.4} height={153.6}/>
            </div>
            <div className={styles.containerInfoCard}>
                <div className={styles.titleCard}>{data?.namePet}</div>
                <div className={styles.infoCard}>{data?.genderPet},{data?.agePet} años</div>
                <ContadorDiasDeEspera diaQueLlego={data.fechaRecoleccion}/>
            </div>
        </div>
    </div>
  )
}

export default CardSeacrhResult