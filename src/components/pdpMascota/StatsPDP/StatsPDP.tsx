//components
import Image from 'next/image'
//styles
import styles from './StatsPDP.module.sass'

const urlIconEdad = '/Icons/IconEdad.svg'
const urlIconPeso = '/Icons/IconPeso.svg'
const urlIconTalla = '/Icons/IconTalla.svg'
const urlIconEnergyFull = '/Icons/energyFull.svg'
const urlIconEnergyEmpty = '/Icons/energyEmpty.svg'
const urlIconBaby = '/Icons/IconBaby.svg'
const urlIconDog = '/Icons/IconDog.svg'
const urlIconCat = '/Icons/IconCat.svg'

export const StatsPDP = () => {
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
                            <span>3 años</span>
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
                            <span>12 kgs</span>
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
                            <span>Mediana</span>
                        </div>
                    </div>
                </div>
                <div className={styles.containerRules}>
                    <div className={styles.containerEnergy}>
                        <div className={styles.containerText}>
                            <span>Energía</span>
                        </div>
                        <div className={styles.containerImages}>
                            <div className={styles.containerImage}>
                                <Image
                                    src={urlIconEnergyFull}
                                    alt='iconEnergyFull'
                                    fill
                                />
                            </div>
                            <div className={styles.containerImage}>
                                <Image
                                    src={urlIconEnergyFull}
                                    alt='iconEnergyFull'
                                    fill
                                />
                            </div>
                            <div className={styles.containerImage}>
                                <Image
                                    src={urlIconEnergyFull}
                                    alt='iconEnergyFull'
                                    fill
                                />
                            </div>
                            <div className={styles.containerImage}>
                                <Image
                                    src={urlIconEnergyFull}
                                    alt='iconEnergyFull'
                                    fill
                                />
                            </div>
                            <div className={styles.containerImage}>
                                <Image
                                    src={urlIconEnergyEmpty}
                                    alt='iconEnergyEmpty'
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerConvive}>
                        <div className={styles.containerText}>
                            <span>Convive</span>
                        </div>
                        <div className={styles.containerImages}>
                            <div className={styles.containerImageIcon}>
                                <Image
                                    src={urlIconBaby}
                                    alt='iconBaby'
                                    fill
                                />
                            </div>
                            <div className={styles.containerImageIcon}>
                                <Image
                                    src={urlIconDog}
                                    alt='iconDog'
                                    fill
                                />
                            </div>
                            <div className={styles.containerImageIcon}>
                                <Image
                                    src={urlIconCat}
                                    alt='iconCat'
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
