"use client";
//Librerias
import React from "react";
//Components
import Image from "next/image";
import ContadorDiasDeEspera from "../ContadorDiasDeEspera/ContadorDiasDeEspera";
//Icons
import rayos from '../../../public/rayos.png'
import pastel from '../../../public/pastel.png'
import balanza from '../../../public/balanza.png'
import perro from '../../../public/perro.png'
import gato from '../../../public/gato.png'
//Styles
import styles from "./CardPDP.module.css";
//Models
import { DEVICE } from "../../../tsModels/useDevice.model";
interface CardPDPProps {
  device: DEVICE | undefined;
  imagen01: string;
  namePet: string;
  genderPet: string;
  diaQueLlego: Date;
  energyPet:string
  sizePet:string
  agePet:string
  description00:string
}

const CardPDP: React.FC<CardPDPProps> = ({
  device,
  imagen01,
  namePet,
  genderPet,
  diaQueLlego,
  energyPet,
  sizePet,
  agePet,
  description00
}) => {
  if (device === "desktop") {
    return null;
  }
  if (device === "tablet") {
    return null;
  }
  if (device === "phone") {
    return (
      <section className={styles.sectionCardPDPMobile}>
        <div className={styles.containerCardPDPMobile}>
          <div className={styles.containerImageCardPDPMobile}>
            <Image
              src={imagen01}
              alt="imagen pdpMascota"
              width={290}
              height={170}
            />
          </div>
          <div className={styles.containerInfoCardMobile}>
            <div className={styles.containerTitlesCardMobile}>
              <div className={styles.titleNameMobile}>{namePet}</div>
              {/* <div className={styles.titleBrigadaMobile}>Rescatado por Brigada Murci</div> */}
              <div className={styles.containerGenderMobile}>{genderPet}</div>
            </div>
            <ContadorDiasDeEspera diaQueLlego={diaQueLlego} pdp/>
            <div className={styles.containerStatsMobile}>
              <div className={styles.cardStatsMobile}>
                <div className={styles.containerStatsImageMobile}>
                  <Image src={rayos} alt="rayo" width={50} height={30}/>
                </div>
                <div className={styles.containerStatsInfoMobile}>
                  <span>{energyPet}</span>
                </div>
              </div>
              <div className={styles.cardStatsMobile}>
                <div className={styles.containerStatsImageMobile}>
                <Image src={pastel} alt="rayo" width={50} height={30}/>
                </div>
                <div className={styles.containerStatsInfoMobile}>
                  <span>{agePet}</span>
                </div>
              </div>
              <div className={styles.cardStatsMobile}>
                <div className={styles.containerStatsImageMobile}>
                <Image src={balanza} alt="rayo" width={50} height={30}/>
                </div>
                <div className={styles.containerStatsInfoMobile}>
                  <span>{sizePet}</span>
                </div>
              </div>
            </div>
            <div className={styles.containerDescriptionCardMobile}>
              <span>
                Fue rescatada en estado de gestación avanzada y sobreviviente de
                TVT.
              </span>
            </div>
            <div className={styles.containerConvivenciaCardMobile}>
              <div className={styles.containerImageConvivenciaMobile}>
                <Image src={perro} alt="perro" width={50} height={50}/>
                <Image src={gato} alt="gato" width={50} height={50}/>
              </div>
              <div className={styles.containerInfoConvivenciaMobile}>
                <span>Convive con otros perritos, cachorros y adultos y gatos.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default CardPDP;
