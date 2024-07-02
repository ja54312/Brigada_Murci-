//Components
import { SocialMedia } from './components/SocialMedia';
//Styles
import styles from './Footer.module.sass';

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterText}>
                <p>Conoce más de nuestra labor en redes sociales:</p>
            </div>
            <div className={styles.FooterSocialMedia}>
                <SocialMedia srcImage='/images/FacebookLogo.png' altImage='facebook' />
                <SocialMedia srcImage='/images/InstagramLogo.png' altImage='instagram' />
                <SocialMedia srcImage='/images/TiktokLogo.png' altImage='tiktok' />
            </div>
        </footer>
    )
}