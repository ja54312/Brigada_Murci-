//components
import Image from 'next/image'
//styles
import styles from './HeroPDP.module.sass'

const urlImage = '/photos/cuquita.png'
const urlVideo = '/images/video.svg'

export const HeroPDP = () => {
    return (
        <section className={styles.HeroPDP}>
            <div className={styles.containerHeroPDP}>
                <div className={styles.containerInfoName}>
                    <div className={styles.containerName}>
                        <span>Cuquita</span>
                    </div>
                    <div className={styles.containerGenre}>
                        <span>Hembra</span>
                    </div>
                </div>
                <div className={styles.containerCarrusel}>
                    <div className={styles.containerCarruselImages}>
                        <div className={styles.containerImage}>
                            <Image
                                src={urlImage}
                                alt='imagen mascota'
                                fill
                            />
                        </div>
                    </div>
                    <div className={styles.containerPoints}>
                        <span className={styles.active}></span>
                        <span></span>
                        <span></span>
                        <div className={styles.containerVideo}>
                            <Image
                                src={urlVideo}
                                alt='point video'
                                fill
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
