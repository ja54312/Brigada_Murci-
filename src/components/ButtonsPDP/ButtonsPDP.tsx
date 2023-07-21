"use client"
//Librerias
import React from 'react'
//Styles
import styles from './ButtonsPDP.module.css'
//Modules
import { DEVICE } from '../../../tsModels/useDevice.model'
interface ButtonsPDPProps{
    device: DEVICE | undefined
}

const ButtonsPDP:React.FC<ButtonsPDPProps> = ({device}) => {
    if(device === 'desktop'){
        return null
    }
    if(device === 'tablet'){
        return null
    }
    if(device === 'phone'){
        return (
            <section className={styles.sectionButtonsPDPMobile}>
                <div className={styles.containerButtonsPDPMobile}>
                    <button>Apadrríname</button><button><a href='https://forms.gle/FjpcgbrfhpCTGd8A8' target="_blank">Adóptame</a></button>
                </div>
            </section>
          )
    }else {
        return  null
    }
  
}

export default ButtonsPDP