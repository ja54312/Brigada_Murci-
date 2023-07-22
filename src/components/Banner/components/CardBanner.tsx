'use client'
//Librerias
import React,{useState , useEffect} from 'react'
//Component
import Image from 'next/image'
//Icons
import perritos from '../../../../public/perritos.png'
//Styles
import styles from '../Banner.module.css'
//Models
interface CardBannerProps {
    data:any,
    position:number
}

const CardBanner:React.FC<CardBannerProps> = ({data,position}) => {

    if(position === 0){
        return (    
          <div className={styles.cardBannerMobile}>
              <div className={styles.cardBanner01}>
              <div className={styles.cardBannerInfo}>
                  <span>{data?.textCard}</span>
              </div>
              <div className={styles.cardBannerImage}>
                <Image src={perritos} alt='imagen banner' width={200}/>
              </div>
              </div>
          </div>
        )
    }
    if(position === 1){
        return (
      
          <div className={styles.cardBannerMobile}>
              <div className={styles.cardBanner02}>
              <div className={styles.cardBannerInfo}>
                  <span>{data?.textCard}</span>
                  <div></div>
              </div>
              <div className={styles.cardBannerImage}>
                  <img src={data?.bannerCard} alt='imagen banner'/>
              </div>
              </div>
          </div>
        )
    }
    if(position === 2){
        return (
      
          <div className={styles.cardBannerMobile}>
              <div className={styles.cardBanner03}>
              <div className={styles.cardBannerInfo}>
                  <span>{data?.textCard}</span>
                  <div></div>
              </div>
              <div className={styles.cardBannerImage}>
                  <img src={data?.bannerCard} alt='imagen banner'/>
              </div>
              </div>
          </div>
        )
    }else
    return null

}

export default CardBanner