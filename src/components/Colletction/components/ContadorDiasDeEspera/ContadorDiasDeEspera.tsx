"use client";
//Librerias
import React from "react";
//Styles
import styles from "./ContadorDiasDeEspera.module.css";
//Models
interface ContadorDiasDeEsperaProps {
    diaQueLlego: Date;
}

const ContadorDiasDeEspera: React.FC<ContadorDiasDeEsperaProps> = ({ diaQueLlego }) => {
    let hoy = new Date();
  //console.log(dia);
  let diferenciaMilisegundos = hoy.getTime() - diaQueLlego.getTime();
  let diferenciaDias = Math.round(diferenciaMilisegundos / (24 * 60 * 60 * 1000));
  //console.log(diferenciaDias)
  return (
    <section className={styles.sectionContador}>
      <span className={styles.infoContador}>
        <strong>{diferenciaDias}</strong> dias en espera de un hogar
      </span>
    </section>
  );
};

export default ContadorDiasDeEspera;
