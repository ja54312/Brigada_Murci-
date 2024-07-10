//components
import Link from 'next/link'
import Image from 'next/image'
//styles
import styles from './Card.module.sass'

const urlImage = '/photos/cuquita.png'

export const Card = () => {

    const urlCard = '/adopta-un-amigo/01'

    return (
        <div className={styles.Card}>
            <Link href={urlCard}>
                <div className={styles.containerImageCard}>
                    <Image
                        src={urlImage}
                        alt='imagen'
                        fill
                    />
                </div>
                <div className={styles.containerInfo}>
                    <div className={styles.name}>
                        <span>Cuquita</span>
                    </div>
                    <div className={styles.caracteristicas}>
                        <span>Hembra</span>
                        <span className={styles.separator}> | </span>
                        <span>3 años</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
