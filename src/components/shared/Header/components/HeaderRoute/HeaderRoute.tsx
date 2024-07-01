//components
import { Logo } from '../Logo'
//styles
import styles from './HeaderRoute.module.sass'
export const HeaderRoute = () => {
    return (
        <div className={styles.HeaderRoute}>
            <Logo />
        </div>
    )
}
