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
                <p>Somos un grupo de jóvenes que inicio de forma independiente en diciembre de 2020, dedicado a rescatar y rehabilitar perros y gatos que se encuentran en situaciones de calle y maltrato animal. Recientemente, hemos evolucionado hacia una organización civil con la meta de expandir nuestra labor e impactar positivamente a un mayor número de animales en situación de vulnerabilidad.</p>
                <p>Nuestro objetivo es llevar jornadas de esterilización gratuitas, campañas de medicina preventiva para animales de compañía a comunidades de escasos recursos, promover adopciones responsables y concientizar a la sociedad mediante actividades que fomenten el bienestar animal para reducir la población de animales en condición de calle y maltrato en la zona oriente del Estado de México. </p>
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

