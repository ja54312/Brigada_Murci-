"use client";
//Librerias
import React from "react";
//Components
import Image from "next/image";
import ContadorDiasDeEspera from "../ContadorDiasDeEspera/ContadorDiasDeEspera";
//Styles
import styles from "./CollectionCards.module.css";
//Models
import { Adoption } from "../../../../../tsModels/adoption.model";
interface CollectionCardsProps {
  data: Adoption;
}

const CollectionCards: React.FC<CollectionCardsProps> = ({ data }) => {
  //const diaPrueba = new Date("2023-05-15T06:00:00.000+00:00");
  return (
    <div className={styles.containerCard}>
      <div className={styles.containerCardInfo}>
        <div className={styles.containerCardImage}>
          <Image
            src={data.imagenPet}
            alt="imagen de animal"
            width={220}
            height={100}
          />
        </div>
        <div className={styles.containerCardInfoText}>
          <div className={styles.containerInfoTextData}>
            <span>{data.namePet}</span>
            <span>{data.agePet} años</span>
            <span>{data.genderPet}</span>
          </div>
          <div className={styles.containerContador}>
            <ContadorDiasDeEspera diaQueLlego={data.fechaRecoleccion} />
          </div>
          <div className={styles.containerInfoTextSize}>
            <span>Talla:{data.sizePet}</span>
            <span>Energía:{data.energyPet}</span>
          </div>
          <div className={styles.containerInfoTextDescription}>
            <p>{data.description}</p>
          </div>
        </div>
        <div className={styles.containerCardButtons}>
          <button className={styles.cardButton}>Adóptame</button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCards;
