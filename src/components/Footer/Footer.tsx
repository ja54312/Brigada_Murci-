"use client"
//Librerias
import React from 'react'
//Component
import Link from 'next/link'
import Image from 'next/image'
//Icons
import tiktok from '../../../public/tiktok.png'
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram.png'
//Styles
import styles from './Footer.module.css'
//Models
import { DEVICE } from '../../../tsModels/useDevice.model'
interface FooterProps {
  device:DEVICE | undefined
}

const Footer:React.FC<FooterProps> = ({device}) => {
  if(device === 'desktop'){
    return null
  }
  if(device === 'tablet'){
    return null
  }
  if(device === 'phone'){
    return (
      <footer className={styles.footerMobile}>
        <div className={styles.containerContactMobile}>
            <span className={styles.subtitleContactMobile}>Conoce más de nuestra labor en redes sociales:</span>
            <div className={styles.containerImagesContactMobile}>
              <Link href='https://www.facebook.com/brigadamurcitexcoco' target='_blank'>
                <Image src={facebook} alt='facebook' width={50} height={50}/>
              </Link>
              <Link href='https://www.instagram.com/brigadamurcitexcoco/' target='_blank'>
                <Image src={instagram} alt='facebook' width={50} height={50}/>
              </Link>
              <Link href='https://www.tiktok.com/@brigadamurcitexcoco?_t=8eBjJ6y3ZLy&_r=1' target='_blank'>
                <Image src={tiktok} alt='facebook' width={50} height={50}/>
              </Link>
            </div>
            <span className={styles.infoContactMobile}>@brigadamurcitexcoco</span>
            <span className={styles.infoContactMobile}>@brigadamurci.adoptables</span>
        </div>
        <span className={styles.creatdByMobile}>Created with love ❤ by<a href='https://www.ja54312.com/' target="_blank" rel="noopener noreferrer">@JA54312</a></span>
      </footer>
    )
  }else{
    return null
  }
}

export default Footer