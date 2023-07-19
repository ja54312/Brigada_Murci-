"use client";
//Librerias
import React from "react";
//Styles
import styles from "./DeviceUnavible.module.css";
//Models
import { DEVICE } from "../../../tsModels/useDevice.model";
interface DeviceUnavibleProps {
 device: DEVICE | undefined
}

const DeviceUnvailable:React.FC<DeviceUnavibleProps> = ({device}) => {
    if(device === 'desktop'){
        return (
          <section className={styles.sectionDeviceUnavible}>
            <div className={styles.containerDeviceUnavible}>
              Por el momento la pagina no se encuentra optimizada para este
              dispositivo, prueba en mobile
            </div>
          </section>
        );
    }
    if(device === 'tablet'){
        return (
          <section className={styles.sectionDeviceUnavibleTablet}>
            <div className={styles.containerDeviceUnavibleTablet}>
              Por el momento la pagina no se encuentra optimizada para este
              dispositivo, prueba en mobile
            </div>
          </section>
        );
    }
    if(device === 'phone'){
        return null
    }else{
        return null
    }
};

export default DeviceUnvailable;
