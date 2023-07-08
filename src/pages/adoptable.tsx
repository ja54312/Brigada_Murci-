//Librerias
import React from "react";
//Components
import ClientOnly from "@/components/ClientOnly/ClientOnly";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const adoptable = () => {
  return (
    <>
      <ClientOnly>
        <Header />
        <div>adoptable</div>
        <Footer />
      </ClientOnly>
    </>
  );
};

export default adoptable;
