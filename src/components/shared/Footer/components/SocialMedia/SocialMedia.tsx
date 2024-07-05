//components
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './SocialMedia.module.sass'
//Types
interface SocialMediaProps {
    srcImage: string
    altImage: string
    urlSocialMedia: string
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ srcImage, altImage, urlSocialMedia }) => {
    return (
        <div className={styles.SocialMedia}>
            <Link href={urlSocialMedia} target='_blank'>
                <Image
                    src={srcImage}
                    alt={altImage}
                    width={32}
                    height={32}
                />
            </Link>
        </div>
    )
}
