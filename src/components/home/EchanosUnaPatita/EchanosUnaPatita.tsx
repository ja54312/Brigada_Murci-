//components
import Image from 'next/image'
//styles
import styles from './EchanosUnapatita.module.sass'

const urlImage = '/images/_1.svg'

export const EchanosUnaPatita = () => {
    return (
        <section className={styles.EchanosUnaPatita}>
            <div className={styles.EchanosUnaPatitaTitle}>
                <span>Échanos una patita</span>
            </div>
            <div className={styles.EchanosUnaPatitaImage}>
                <Image
                    src={urlImage}
                    alt='echanos una patita'
                    fill
                />
            </div>
            <div className={styles.EchanosUnaPatitaText}>
                <p>Con tu apoyo podemos seguir ayudando a más perritos y gatitos. Puedes realizar donativos económicos o en especie.</p>
            </div>
            <div className={styles.EchanosUnaPatitaButtons}>
                <button>Donar</button>
                <button>Ser un padrino</button>
                <button>Ser voluntario</button>
            </div>
        </section>
    )
}
