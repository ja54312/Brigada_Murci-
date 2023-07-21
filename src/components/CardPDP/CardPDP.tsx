"use client"
//Librerias
import React from 'react'
//Components
import Image from 'next/image'
import ContadorDiasDeEspera from '../ContadorDiasDeEspera/ContadorDiasDeEspera'
//Styles
import styles from './CardPDP.module.css'
//Models
import { DEVICE } from '../../../tsModels/useDevice.model'
interface CardPDPProps {
    device: DEVICE | undefined
    imagen01:string
    namePet:string
    genderPet:string
    diaQueLlego: Date
}

const CardPDP:React.FC<CardPDPProps> = ({device,imagen01,namePet,genderPet,diaQueLlego}) => {
    if(device === 'desktop'){
        return null
    }
    if(device === 'tablet'){
        return null
    }
    if(device === 'phone'){
        return (
          <section className={styles.sectionCardPDPMobile}>
            <div className={styles.containerCardPDPMobile}>
                <div className={styles.containerImageCardPDPMobile}>
                    <Image  src={imagen01} alt='imagen pdpMascota' width={290} height={170}/>
                </div>
                <div className={styles.containerInfoCardMobile}>
                    <div className={styles.containerTitlesCardMobile}>
                        <div className={styles.titleNameMobile}>{namePet}</div>
                        <div className={styles.titleBrigadaMobile}>Rescatado por Brigada Murci</div>
                        <div className={styles.containerGenderMobile}>{genderPet}</div>
                    </div>
                    <ContadorDiasDeEspera diaQueLlego={diaQueLlego}/>
                </div>
            </div>
          </section>
        )
    }else {
        return null
    }
}

export default CardPDP