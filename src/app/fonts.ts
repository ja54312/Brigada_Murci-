import { Dosis, Poppins, Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const dosis = Dosis({
    subsets: ['latin'],
    variable: '--font-dosis',
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
})

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

export const blueberry = localFont({
    src: '../fonts/Blueberry .ttf',
    variable: '--font-blueberry',
    display: 'swap',
})