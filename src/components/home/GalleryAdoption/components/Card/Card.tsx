//components
import Link from 'next/link'
import Image from 'next/image'
//styles
import styles from './Card.module.sass'
//types
interface CardProps {
    perro: {
        id: string;
        index: number
        name: string;
        genre: string;
        age: number;
        weight: number;
        size: string;
        energy: number;
        conviveBaby: boolean;
        conviveDog: boolean;
        conviveCat: boolean;
        desc: string;
        urlimg: string;
    }
}


export const Card: React.FC<CardProps> = ({ perro }) => {

    const urlCard = `/adoptables/${perro.id}`
    //console.log('perro', perro)
    const urlImage = perro.urlimg


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
                        <span>{perro.name}</span>
                    </div>
                    <div className={styles.caracteristicas}>
                        <span>{perro.genre}</span>
                        <span className={styles.separator}> | </span>
                        <span>{perro.age} años</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
