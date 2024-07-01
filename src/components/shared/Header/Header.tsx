//Components
import { HeaderRoute } from "./components/HeaderRoute";
import { Menu } from "./components/Menu";
//Styles
import styles from './Header.module.sass';
export const Header = () => {
    return (<header className={styles.Header}>
        <HeaderRoute />
        <Menu />
    </header>)
}