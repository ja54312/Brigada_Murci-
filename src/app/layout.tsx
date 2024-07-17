//Fonts
import { dosis, poppins, inter, blueberry } from './fonts'
//Components
import { Header } from '../components/shared/Header'
import { Footer } from '../components/shared/Footer'
//Styles
import '../sass/global.sass'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className={`${dosis.variable} ${poppins.variable} ${inter.variable} ${blueberry.variable}`}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}