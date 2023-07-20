"use client"
//Librerias
import React from 'react'
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
    console.log(0,data)
  return (
    <div className={styles.cardSearchResult}>
        <div className={styles.containerInfoSearchResult}>
            <div className={styles.containerImageCard}>
                <Image src={data?.imagenPet} alt='mascota' width={145} height={110}/>
            </div>
            <div className={styles.containerInfoCard}>
                <div className={styles.titleCard}>{data?.namePet}</div>
                <div className={styles.infoCard}>{data?.genderPet},{data?.agePet}años</div>
                <ContadorDiasDeEspera diaQueLlego={data.fechaRecoleccion}/>
            </div>
        </div>
    </div>
  )
}

export default CardSeacrhResult