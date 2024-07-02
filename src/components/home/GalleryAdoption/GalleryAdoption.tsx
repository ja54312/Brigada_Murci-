//components
import { Card } from './components/Card'
//styles
import styles from './GalleryAdoption.module.sass'

export const GalleryAdoption = () => {
    return (
        <section className={styles.GalleryAdoption}>
            <div className={styles.GalleryAdoptionTitle}>
                <span>Adopta a un amigo</span>
            </div>
            <div className={styles.GalleryAdoptionSection}>
                <div className={styles.cardSection}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className={styles.buttonSection}>
                    <button>Ver todos</button>
                </div>
            </div>
        </section>
    )
}
