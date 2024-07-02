//components
import Image from 'next/image'
//styles
import styles from './Hero.module.sass'

const urlImage = '/images/banner-home-4 1.png'

export const Hero = () => {
    return (
        <section className={styles.Hero}>
            <div className={styles.HeroText}>
                <span>Brigada Murci</span>
            </div>
            <div className={styles.HeroInfo}>
                <p>Brigada Murci es un grupo de jóvenes que inició de forma independiente en diciembre de 2020, dedicado a rescatar y rehabilitar perros y gatos que se encuentran en situaciones de calle y maltrato animal. Recientemente, hemos evolucionado hacia una organización civil con la meta de expandir nuestra labor e impactar positivamente a un mayor número de animales en situación de vulnerabilidad.</p>
            </div>
            <div className={styles.HeroImage}>
                <Image
                    src={urlImage}
                    alt='imagen'
                    fill
                />
            </div>
        </section>
    )
}

