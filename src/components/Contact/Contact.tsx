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
import styles from './Contact.module.css'
//Models
import { DEVICE } from '../../../tsModels/useDevice.model'
interface ContactProps {
  device:DEVICE | undefined
}

const Contact:React.FC<ContactProps> = ({device}) => {
  if(device === 'desktop'){
    return null
  }
  if(device === 'tablet'){
    return null
  }
  if(device === 'phone'){
    return (
      <section className={styles.sectionContactMobile}>
        <div className={styles.containerContactMobile}>
            <br/>
            <Link href='https://www.paypal.me/brigadamurci' target='_blank'>
            <span className={styles.titleContactMobile}>DONA AQUÍ</span>
            </Link>
            <Link href='/apadriname'>
            <span className={styles.titleContactMobile}>OTRAS FORMAS DE AYUDAR</span>
            </Link>
            <br/>
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
        </div>
      </section>
    )
  }else{
    return null
  }
}

export default Contact