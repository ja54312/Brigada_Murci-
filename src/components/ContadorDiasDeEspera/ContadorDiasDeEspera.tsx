"use client";
//Librerias
import React from "react";
//Styles
import styles from "./ContadorDiasDeEspera.module.css";
//Icons
import warning from '../../../public/senal-de-peligro.png'
//Models
interface ContadorDiasDeEsperaProps {
    diaQueLlego: Date;
}

const ContadorDiasDeEspera: React.FC<ContadorDiasDeEsperaProps> = ({ diaQueLlego }) => {
  //console.log(10,typeof(diaQueLlego))
    let hoy = new Date();
    let diaQueLlego00
    if(typeof(diaQueLlego)=== 'string'){
      diaQueLlego00 = Date.parse(diaQueLlego)
    }else{
      diaQueLlego00 = diaQueLlego.getTime()
    }
  //console.log(dia);
  let diferenciaMilisegundos = hoy.getTime() - diaQueLlego00;
  let diferenciaDias = Math.round(diferenciaMilisegundos / (24 * 60 * 60 * 1000));
  //console.log(diferenciaDias)
  return (
    <section className={styles.sectionContadorMobile}>
      <span className={styles.infoContadorMobile}>
         <strong>{diferenciaDias}</strong> días en espera de un hogar
      </span>
    </section>
  );
};

export default ContadorDiasDeEspera;
