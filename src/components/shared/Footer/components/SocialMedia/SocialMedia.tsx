//components
import Image from 'next/image'
//styles
import styles from './SocialMedia.module.sass'
//Types
interface SocialMediaProps {
    srcImage: string
    altImage: string
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ srcImage, altImage }) => {
    return (
        <div className={styles.SocialMedia}>
            <Image
                src={srcImage}
                alt={altImage}
                width={32}
                height={32}
            />
        </div>
    )
}
