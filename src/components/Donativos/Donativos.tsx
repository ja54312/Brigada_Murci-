"use client";
//Librerias
import React from "react";
//Component
import Link from "next/link";
//Styles
import styles from "./Donativos.module.css";
//Models
import { DEVICE } from "../../../tsModels/useDevice.model";
interface donativosProps {
  device: DEVICE | undefined;
}

const Donativos: React.FC<donativosProps> = ({ device }) => {
  if (device === "desktop") {
    return null;
  }
  if (device === "tablet") {
    return null;
  }
  if (device === "phone") {
    return (
      <section className={styles.sectionDonativosMobile}>
        <div className={styles.containerDonativosMobile}>
          <div className={styles.containerInfoDonativosMobile}>
            <span className={styles.titleDonativosMobile}>DONATIVOS ECONÓMICOS</span>
            <div className={styles.containerMiniInfoMobile}>
              <span>Banco Azteca</span>
              <span>Gabriela Velázquez</span>
              <span>Cuenta: 9479 1337 4491 8</span>
              <span>CLABE: 1271 8001 3374 4918 92</span>
              <Link href='https://www.paypal.me/brigadamurci' target='_blank'>paypal.me/brigadamurci</Link>
            </div>
          </div>
          <div className={styles.containerInfoDonativosMobile}>
            <span className={styles.titleDonativosMobile}>DONATIVOS EN ESPECIE</span>
            <ul>
              <li>Croquetas en empaque cerrado.</li>
              <li>
                Accesorios para mascota no importa que sean de uso, mientras
                estén en buen estado.{" "}
              </li>
              <li>
                Material de limpieza y curación (limpia pisos, detergente,
                cloro, gasas, jeringas, agua oxigenada etc)
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Donativos;
