"use client"
//Librerias
import React from 'react'
//Component
import Link from 'next/link'
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
        <span>Created with love ❤ by<a href='https://www.ja54312.com/' target="_blank" rel="noopener noreferrer">@JA54312</a></span>
      </footer>
    )
  }else{
    return null
  }
}

export default Footer