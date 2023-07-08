"use client";
//Librerias
import React from "react";
//Components
import Image from "next/image";
//Hooks
import { useRouter } from "next/router";
//Image
import logo from "../../../public/BrigadaMurciLogoH.png";
//Styles
import styles from "./Logo.module.css";

const Logo = () => {
  const router = useRouter();
  const haciaHome = () => router.push("/");
  return (
    <div className={styles.containerLogo} onClick={() => haciaHome()}>
      <Image src={logo} alt="Logo Brigada Murci" width={350} height={50} />
    </div>
  );
};

export default Logo;
