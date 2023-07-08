//Librerias
import React from "react";
//Components
import ClientOnly from "@/components/ClientOnly/ClientOnly";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const perros = () => {
  return (
    <>
      <ClientOnly>
        <Header />
        <div>perros</div>
        <Footer />
      </ClientOnly>
    </>
  );
};

export default perros;
