"use client"
import { useState } from 'react'
//components
import { Card } from './components/Card'
//database
import dataPerritos from '../../../database/dataLocal'
//styles
import styles from './GalleryAdoption.module.sass'

export const GalleryAdoption = () => {

    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };
    //console.log(0, showAll)
    const displayedPerritos = showAll ? dataPerritos : dataPerritos.slice(0, 6);


    return (
        <section className={styles.GalleryAdoption} id='GalleryAdoption'>
            <div className={styles.GalleryAdoptionTitle}>
                <span>Adopta a un amigo</span>
            </div>
            <div className={styles.GalleryAdoptionSection}>
                <div className={styles.cardSection}>
                    {displayedPerritos?.map((perro) => (<Card key={perro.id} perro={perro} />))}
                </div>
                <div className={styles.buttonSection}>
                    {!showAll && <button onClick={handleShowAll}>Ver todos</button>}
                </div>
            </div>
        </section>
    )
}
