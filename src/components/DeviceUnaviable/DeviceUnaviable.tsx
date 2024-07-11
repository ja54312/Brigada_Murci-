"use client";
//Hooks
import useDevice from "../../hooks/useDevice";
//Styles
import styles from "./DeviceUnaviable.module.sass";

export const DeviceUnvailable = () => {
    const { device } = useDevice();

    if (device === 'desktop') {
        return (
            <div className={styles.sectionDeviceUnavible}>
                <div className={styles.containerDeviceUnavible}>
                    Por el momento la página no se encuentra optimizada para este dispositivo, prueba en tu celular.
                </div>
            </div>
        );
    }
    if (device === 'tablet') {
        return (
            <div className={styles.sectionDeviceUnavibleTablet}>
                <div className={styles.containerDeviceUnavibleTablet}>
                    Por el momento la página no se encuentra optimizada para este dispositivo, prueba en tu celular.
                </div>
            </div>
        );
    }
    if (device === 'phone') {
        return null
    } else {
        return null
    }
};