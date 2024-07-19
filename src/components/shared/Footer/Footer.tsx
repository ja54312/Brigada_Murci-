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
                <SocialMedia srcImage='/images/FacebookLogo.png' altImage='facebook' urlSocialMedia='https://www.facebook.com/brigadamurci' />
                <SocialMedia srcImage='/images/InstagramLogo.png' altImage='instagram' urlSocialMedia='https://www.instagram.com/brigadamurci/' />
                <SocialMedia srcImage='/images/TiktokLogo.png' altImage='tiktok' urlSocialMedia='https://www.tiktok.com/@brigadamurci' />
            </div>
        </footer>
    )
}