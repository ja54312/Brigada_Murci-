//components
import Image from 'next/image'
//styles
import styles from './Menu.module.sass'
export const Menu = () => {
    return (
        <div className={styles.MenuContainer}>
            <div className={styles.MenuBackGround}>
                <Image
                    src="/images/List.svg"
                    alt="MenuHamburguesa"
                    width={28}
                    height={28}
                />
            </div>
        </div>
    )
}
