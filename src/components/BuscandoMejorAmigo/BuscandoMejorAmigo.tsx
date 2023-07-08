//Librerias
import React from 'react'
//Hooks
import { useRouter } from "next/router";
//Styles
import styles from './BuscandoMejorAmigo.module.css'

const BuscandoMejorAmigo = () => {

  const router = useRouter()
  const haciaPerros = () => router.push('/perros')
  const haciaGatos = () => router.push('/gatos')

  return (
    <section className={styles.sectionBuscandoMejorAmigo}>
        <h1>¿Estás buscando a tú mejor amigo?</h1>
        <div className={styles.containerBox}>
            <div className={styles.containerBoxTitle}>¿Perro o gato?</div>
            <div className={styles.containerBoxButtons}>
                <button onClick={()=>haciaPerros()}>Perro</button>
                <button onClick={()=>haciaGatos()}>Gato</button>
            </div>
            <div className={styles.containerBoxFooter}></div>
        </div>
        <div className={styles.containerText}>
        <span>Recuerda que una mascota es un compomiso de 10 o 15 años</span>
        <span>Considera al adoptar ttener el tiempo,dinero y espacio suficiente para tu mascota.</span>
        <p>Todos los animalitos que encontrarás en está página fueron rescatados de la calle en alguna condición extrema de maltrato y/o 
            abandono y cuentan con un protocolo de salud completo sin excepción (esterilazación, desparacitación y esquema de vacunación
            vigente acorde a su edad). Deberás estar 100% comprometido con su bienestar al iniciar con un proceso de adopción.
        </p>
        </div>
    </section>
  )
}

export default BuscandoMejorAmigo