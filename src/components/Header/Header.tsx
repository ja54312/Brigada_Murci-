"useClient";
//Librerias
import React from 'react'
//Hooks
import useDevice from '@/hooks/useDevice';
import { DEVICE } from "../../../tsModels/useDevice.model";
//Components
import Logo from '../Logo/Logo';
import NavBar from './components/NavBar/NavBar';
//Styles
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo/>
      <NavBar/>
    </header>
  )
}

export default Header