//components
import Image from 'next/image'
import { StatsConvive } from './components/StatsConvive'
import { StatsStars } from './components/StatsStars'
//styles
import styles from './StatsPDP.module.sass'

const urlIconEdad = '/Icons/IconEdad.svg'
const urlIconPeso = '/Icons/IconPeso.svg'
const urlIconTalla = '/Icons/IconTalla.svg'

export const StatsPDP = ({ mascota }) => {

    //console.log("StatsPDP", mascota)

    return (
        <section className={styles.StatsPDP}>
            <div className={styles.containerStatsGeneral}>
                <div className={styles.containerStats}>
                    <div className={styles.containerAge}>
                        <div className={styles.containerTextInfo}>
                            <div className={styles.containerImage}>
                                <Image
                                    src={urlIconEdad}
                                    alt='iconEdad'
                                    fill
                                />
                            </div>
                            <div className={styles.ContainerText}>
                                <span>Edad</span>
                            </div>
                        </div>
                        <div className={styles.containerTextStats}>
                            <span>{mascota.age} años</span>
                        </div>
                    </div>
                    <div className={styles.containerWeight}>
                        <div className={styles.containerTextInfo}>
                            <div className={styles.containerImage}>
                                <Image
                                    src={urlIconPeso}
                                    alt='iconPeso'
                                    fill
                                />
                            </div>
                            <div className={styles.ContainerText}>
                                <span>Peso</span>
                            </div>
                        </div>
                        <div className={styles.containerTextStats}>
                            <span>{mascota.weight} kgs</span>
                        </div>
                    </div>
                    <div className={styles.containerSize}>
                        <div className={styles.containerTextInfo}>
                            <div className={styles.containerImage}>
                                <Image
                                    src={urlIconTalla}
                                    alt='iconTalla'
                                    fill
                                />
                            </div>
                            <div className={styles.ContainerText}>
                                <span>Talla</span>
                            </div>
                        </div>
                        <div className={styles.containerTextStats}>
                            <span>{mascota.size}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.containerRules}>
                    <StatsStars mascota={mascota} />
                    <StatsConvive mascota={mascota} />
                </div>
            </div>
        </section>
    )
}
