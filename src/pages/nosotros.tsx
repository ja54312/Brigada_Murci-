//Librerias
import React from "react";
//Components
import ClientOnly from "@/components/ClientOnly/ClientOnly";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
const nosotros = () => {
  return (
    <>
      <ClientOnly>
        <Header />
        <div>nosotros</div>
        <Footer />
      </ClientOnly>
    </>
  );
};

export default nosotros;
