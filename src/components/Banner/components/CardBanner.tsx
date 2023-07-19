'use client'
//Librerias
import React,{useState , useEffect} from 'react'
//Styles
import styles from '../Banner.module.css'
//Models
interface CardBannerProps {
    data:any
}

const CardBanner:React.FC<CardBannerProps> = ({data}) => {

    {/* <div className={styles.cardBannerInfo}>
            <span>¿Estás buscando a tu nuevo mejor amigo?</span>
            <div></div>
        </div>
        <div className={styles.cardBannerImage}>perritos</div> */}
  return (

    <div className={styles.cardBannerMobile}>
        <div className={styles.cardBanner01}>
            {data?.textCard}
        </div>
    </div>
  )
}

export default CardBanner