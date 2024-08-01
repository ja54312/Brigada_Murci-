//component
import Image from 'next/image'
import Link from 'next/link'
//styles
import styles from './ButtonPDP.module.sass'

const urlIconHuellita = '/Icons/Huellita.svg'

export const ButtonPDP = () => {
    return (
        <section className={styles.ButtonPDP}>
            <div className={styles.containerButton}>
                <Link href='/cuestionario-pre-adopcion'>
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
                </Link>
            </div>
        </section>
    )
}
