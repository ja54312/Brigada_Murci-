import { Dosis } from 'next/font/google'
import { Header } from '../components/shared/Header'
import { Footer } from '../components/shared/Footer'
import '../sass/global.sass'

const dosis = Dosis({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={dosis.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}