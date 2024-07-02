//components
import Image from 'next/image'
//styles
import styles from './Card.module.sass'
import { url } from 'inspector'

const urlImage = '/photos/cuquita.png'

export const Card = () => {
    return (
        <div className={styles.Card}>
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
        </div>
    )
}
