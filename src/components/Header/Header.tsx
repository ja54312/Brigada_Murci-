"useClient";
//Librerias
import React from 'react'
//Components
import Logo from '../Logo/Logo';
import NavBar from './components/NavBar/NavBar';
//Styles
import styles from './Header.module.css'
//Models
import { DEVICE } from '../../../tsModels/useDevice.model';
interface HeaderProps {
  device:DEVICE |undefined
}

const Header:React.FC<HeaderProps> = ({device}) => {
  if(device === 'desktop'){
    return null
    // return (
    //   <header className={styles.header}>
    //     <Logo/>
    //     <NavBar/>
    //   </header>
    // )
  }if(device === 'tablet'){
    return null
  }
  if(device === 'phone'){
    return (
      <header className={styles.headerMobile}>
        <Logo/>
      </header>
    )
  }else{
    return null
  }

}

export default Header