"use client"
//Librerias
import React from 'react'
//Component
import Link from 'next/link'
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
        
      </section>
    )
  }else{
    return null
  }
}

export default Contact