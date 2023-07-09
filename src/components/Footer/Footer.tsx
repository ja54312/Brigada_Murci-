"use client"
//Librerias
import React from 'react'
//Component
import Link from 'next/link'
//Styles
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Created with love ❤ by<a href='https://www.ja54312.com/' target="_blank" rel="noopener noreferrer">@JA54312</a></span>
    </footer>
  )
}

export default Footer