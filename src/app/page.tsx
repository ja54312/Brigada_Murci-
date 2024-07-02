//components
import { DeviceUnvailable } from "../components/DeviceUnaviable"
import { BannerHome } from "../components/home/BannerHome"
import { Hero } from "../components/home/Hero"

export default function Home() {

    return (
        <main>
            <DeviceUnvailable />
            <BannerHome />
            <Hero />
        </main>
    )
}