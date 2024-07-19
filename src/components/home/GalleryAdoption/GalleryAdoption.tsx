"use client"
import { useEffect } from 'react'
//components
import { Card } from './components/Card'
//database
import dataPerritos from '../../../database/dataLocal'
//styles
import styles from './GalleryAdoption.module.sass'

export const GalleryAdoption = () => {
    //console.log('data', dataPerritos)
    // useEffect(() => {
    //     createRandomImages();
    // }, []);

    const getRandomPosition = (element) => {
        //const x = Math.floor(Math.random() * window.innerWidth);
        const x = Math.floor(Math.random() * 375);
        const y = Math.floor(Math.random() * 500);
        return { x, y };
    };

    const createRandomImages = () => {
        const container = document.getElementById('GalleryAdoption');
        for (let i = 0; i < 5; i++) { // cantidad de imágenes que quieras
            const img = document.createElement('div');
            img.classList.add(styles.smallBgImage);
            const { x, y } = getRandomPosition(img);
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
            container.appendChild(img);
        }
    };

    return (
        <section className={styles.GalleryAdoption} id='GalleryAdoption'>
            <div className={styles.GalleryAdoptionTitle}>
                <span>Adopta a un amigo</span>
            </div>
            <div className={styles.GalleryAdoptionSection}>
                <div className={styles.cardSection}>
                    {dataPerritos && dataPerritos.map((perro) => (<Card perro={perro} />))}
                </div>
                <div className={styles.buttonSection}>
                    <button>Ver todos</button>
                </div>
            </div>
        </section>
    )
}
