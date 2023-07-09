//Fuente
import { Inter } from "next/font/google";
//Components
import Head from "next/head";
import ClientOnly from "@/components/ClientOnly/ClientOnly";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BuscandoMejorAmigo from "@/components/BuscandoMejorAmigo/BuscandoMejorAmigo";
//Hooks
import { useRouter } from "next/router";
import useDevice from "@/hooks/useDevice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { device } = useDevice();
  const router = useRouter();
  //const haciaAdmin = () => router.push('/admin')
  return (
    <>
      <Head>
        <title>Brigada Murci Adoptables</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BrigadaMurciLogoV.png" />
      </Head>
      <ClientOnly>
        <Header />
        <BuscandoMejorAmigo />
        <Footer />
      </ClientOnly>
    </>
  );
}
