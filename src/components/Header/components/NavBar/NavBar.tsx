"use client"
//Librerias
import React from 'react'
//Components
import Image from 'next/image'
//Hooks
import { useRouter } from "next/router";
//Image
import huellita from '../../../../../public/huella.png'
//Styles
import styles from './NavBar.module.css'
const NavBar = () => {
    const router = useRouter()
  const haciaNosotros = () => router.push('/nosotros')
  const haciaAdoptable = () => router.push('/adoptable')

  return (
    <nav className={styles.navbar}>
        <div className={styles.containerQuestionNavBar} onClick={() => haciaNosotros()}>
            <div className={styles.containerImgaeNavBar}>
                <Image src={huellita} alt='huellita' width={30} height={30}/>
            </div>
            <span>¿Quiénes somos?</span>
        </div>
        <div className={styles.containerQuestionNavBar}>
            <div className={styles.containerImgaeNavBar}>
                <Image src={huellita} alt='huellita' width={30} height={30}/>
            </div>
            <span>Doná Aquí</span>
        </div>
        <div className={styles.containerQuestionNavBar} onClick={() => haciaAdoptable()}>
            <div className={styles.containerImgaeNavBar}>
                <Image src={huellita} alt='huellita' width={30} height={30}/>
            </div>
            <span>Publica tu adoptable</span>
        </div>
    </nav>
  )
}

export default NavBar