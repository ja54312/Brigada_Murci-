//components
import Image from 'next/image'
import Link from 'next/link'
//Styles
import styles from './RouteNav.module.sass'
//Types
interface RoteNavProps {
    pathname: string
}

const urlImage = '/images/CaretLeft.svg'

export const RouteNav: React.FC<RoteNavProps> = ({ pathname }) => {
    //console.log("pathname", pathname)

    let routenav: string
    if (pathname === '/como-adoptar') {
        routenav = '¿Cómo adoptar?'
    } else if (pathname === '/como-ayudar') {
        routenav = '¿Cómo ayudar?'
    } else if (pathname === '/cuestionario-pre-adopcion') {
        routenav = 'Cuestionario de Pre Adopción'
    } else if (pathname.includes('adopta-un-amigo')) {
        routenav = 'Adopta a un amigo'
    } else null


    return (
        <div className={styles.RouteNav}>
            <Link href='/'>
                <div className={styles.containerImage}>
                    <Image
                        src={urlImage}
                        alt='flecha breadcrumb'
                        fill
                    />
                </div>
                <div className={styles.containerText}>
                    <span>{routenav}</span>
                </div>
            </Link>
        </div>
    )
}
