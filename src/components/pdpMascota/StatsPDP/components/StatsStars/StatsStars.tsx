//components
import Image from 'next/image'
//styles
import styles from '../../StatsPDP.module.sass'

export const StatsStars = ({ mascota }) => {

    const urlIconEnergyFull = '/Icons/energyFull.svg'
    const urlIconEnergyEmpty = '/Icons/energyEmpty.svg'

    const totalIcons = 5;
    const energy = mascota.energy

    return (
        <div className={styles.containerEnergy}>
            <div className={styles.containerText}>
                <span>Energía</span>
            </div>
            <div className={styles.containerImages}>
                {Array.from({ length: totalIcons }).map((_, index) => (
                    <div key={index} className={styles.containerImage}>
                        <Image
                            src={index < energy ? urlIconEnergyFull : urlIconEnergyEmpty}
                            alt={index < energy ? 'iconEnergyFull' : 'iconEnergyEmpty'}
                            fill
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
