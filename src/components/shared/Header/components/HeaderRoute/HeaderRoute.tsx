'use client'
//components
import { usePathname } from 'next/navigation'
import { Logo } from '../Logo'
import { RouteNav } from '../RouteNav'
//styles
import styles from './HeaderRoute.module.sass'

export const HeaderRoute = () => {
    const pathname = usePathname()
    console.log("path", pathname)

    return (
        <div className={styles.HeaderRoute}>
            {pathname && pathname === '/' ? <Logo /> : <RouteNav />}
        </div>
    )
}
