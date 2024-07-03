//components
import { DeviceUnvailable } from "../components/DeviceUnaviable"
import { BannerHome } from "../components/home/BannerHome"
import { Hero } from "../components/home/Hero"
import { GalleryAdoption } from "../components/home/GalleryAdoption"
import { AdoptarHome } from "../components/home/AdoptarHome"
import { BannerAdoptame } from "../components/home/BannerAdoptame"

export default function Home() {

    return (
        <main>
            <DeviceUnvailable />
            <BannerHome />
            <Hero />
            <GalleryAdoption />
            <AdoptarHome />
            <BannerAdoptame />
        </main>
    )
}