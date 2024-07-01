//components
import Image from 'next/image';
//styles
import styles from './Logo.module.sass'

export const Logo = () => {
    return (
        <div className={styles.LogoContainer}>
            <Image
                src="/images/MurciLogo.png"
                alt="MurciLogo"
                width={145}
                height={50}
            />
        </div>
    )
}