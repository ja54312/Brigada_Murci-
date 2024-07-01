//Components
import { Logo } from "./components/Logo"
//Styles
import styles from './Header.module.sass';
export const Header = () => {
    return (<header className={styles.Header}>
        <Logo />
    </header>)
}