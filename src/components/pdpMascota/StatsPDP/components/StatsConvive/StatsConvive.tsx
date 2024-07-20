//components
import Image from 'next/image'
//styles
import styles from '../../StatsPDP.module.sass'
//Images
const urlIconBaby = '/Icons/IconBaby.svg'
const urlIconDog = '/Icons/IconDog.svg'
const urlIconCat = '/Icons/IconCat.svg'

export const StatsConvive = ({ mascota }) => {

    //console.log("StatsConvive", mascota)

    const conviveBaby = mascota.conviveBaby
    const conviveDog = mascota.conviveDog
    const conviveCat = mascota.conviveCat

    return (
        <div className={styles.containerConvive}>
            <div className={styles.containerText}>
                <span>Convive</span>
            </div>
            <div className={styles.containerImages}>
                {conviveBaby && <div className={styles.containerImageIcon}>
                    <Image
                        src={urlIconBaby}
                        alt='iconBaby'
                        fill
                    />
                </div>}
                {conviveDog && <div className={styles.containerImageIcon}>
                    <Image
                        src={urlIconDog}
                        alt='iconDog'
                        fill
                    />
                </div>}
                {conviveCat && <div className={styles.containerImageIcon}>
                    <Image
                        src={urlIconCat}
                        alt='iconCat'
                        fill
                    />
                </div>}
            </div>
        </div>
    )
}
