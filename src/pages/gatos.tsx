//Librerias
import React from "react";
//Components
import ClientOnly from "@/components/ClientOnly/ClientOnly";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const gatos = () => {
  return (
    <>
      <ClientOnly>
        <Header />
        <div>gatos</div>
        <Footer />
      </ClientOnly>
    </>
  );
};

export default gatos;
