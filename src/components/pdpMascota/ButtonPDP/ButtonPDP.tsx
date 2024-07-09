//component
import Image from 'next/image'
//styles
import styles from './ButtonPDP.module.sass'

const urlIconHuellita = '/Icons/Huellita.svg'

export const ButtonPDP = () => {
    return (
        <section className={styles.ButtonPDP}>
            <div className={styles.containerButton}>
                <div className={styles.button}>
                    <div className={styles.containerText}>
                        <span>Adóptame</span>
                    </div>
                    <div className={styles.containerImg}>
                        <Image
                            src={urlIconHuellita}
                            alt='huellita'
                            fill
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
