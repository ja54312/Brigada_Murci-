import { Dosis, Poppins, Inter } from 'next/font/google'

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