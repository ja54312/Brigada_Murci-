"use client"
//Libreria
import React from 'react'
//Hooks
import { useRouter } from "next/router";
//Styles
import styles from './headerPage.module.css'
//Models
import { DEVICE } from '../../../tsModels/useDevice.model'
interface HeaderPageProps {
    device:DEVICE | undefined
    collection: string
}

const HeaderPage:React.FC<HeaderPageProps> = ({device,collection}) => {

    const router = useRouter();
    const haciaHome = () => {
        router.push("/")
    }

    let petCollection 
    collection === 'perro' ? petCollection = 'Perros' : petCollection = 'Gatos'

    if(device === 'desktop'){
        return null
    }
    if(device === 'tablet'){
        return null
    }
    if(device === 'phone'){
        return (
          <header className={styles.headerPageMobile}>
            <div className={styles.headercontainerArrow} onClick={()=>haciaHome()}>*v==*</div>
            <div className={styles.headercontainerCollection}>{petCollection}</div>
          </header>
        )
    }else{
        return null
    }
}

export default HeaderPage