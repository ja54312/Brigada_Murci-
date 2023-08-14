"use client";
//Librerias
import React from "react";
//Styles
import styles from "./ContadorDiasDeEspera.module.css";
//Component
import Image from "next/image";
//Icons
import warning from '../../../public/warning.png'
//Models
interface ContadorDiasDeEsperaProps {
  diaQueLlego: Date;
  pdp?: boolean | undefined
}

const ContadorDiasDeEspera: React.FC<ContadorDiasDeEsperaProps> = ({ diaQueLlego, pdp }) => {
  //console.log(10,typeof(diaQueLlego))
  let hoy = new Date();
  let diaQueLlego00
  if (typeof (diaQueLlego) === 'string') {
    diaQueLlego00 = Date.parse(diaQueLlego)
  } else {
    diaQueLlego00 = diaQueLlego.getTime()
  }
  //console.log(dia);
  let diferenciaMilisegundos = hoy.getTime() - diaQueLlego00;
  let diferenciaDias = Math.round(diferenciaMilisegundos / (24 * 60 * 60 * 1000));
  //console.log(diferenciaDias)
  if (pdp) {
    return (
      <section className={styles.sectionContadorMobile}>
        <div className={styles.infoContadorMobilePDP}>
          <div className={styles.miniContainerImagePDP}>
            <Image src={warning} alt='warning' width={30} height={30} />
          </div>
          <strong>{diferenciaDias}</strong><span>días en espera de un hogar</span>
        </div>
      </section>
    )
  } else {
    return (
      <section className={styles.sectionContadorMobile}>
        <div className={styles.infoContadorMobile}>
          <strong>{diferenciaDias}</strong><span> días en espera de un hogar</span>
        </div>
      </section>
    );
  }
};

export default ContadorDiasDeEspera;
