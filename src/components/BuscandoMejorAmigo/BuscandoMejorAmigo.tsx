"use client"
//Librerias
import React from 'react'
//Components
import CardSeacrhResult from './components/CardSeacrhResult';
//Styles
import styles from './BuscandoMejorAmigo.module.css'
//DataBase
import { perrosExample as data} from '../../../database/examples/perrosExample';
//Models
import { DEVICE } from '../../../tsModels/useDevice.model';
interface BuscandoMejorAmigoProps {
  device : DEVICE | undefined
}

const BuscandoMejorAmigo:React.FC<BuscandoMejorAmigoProps> = ({device}) => {

if(device === 'desktop'){
    {/* <section className={styles.sectionBuscandoMejorAmigo}>
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
    </section> */}
  return null
}
if(device === 'tablet'){
  return null
}
if(device === 'phone'){
  return(
    <section className={styles.sectionBuscandoMejorAmigoMobile}> 
      <div className={styles.containerBuscandoMejorAmigoMobile}>
        <div className={styles.containerTitleCategories}>
          {/* <div className={styles.titleCategories}>Categorías</div> */}
          <div className={styles.titleCategories}>Mostrar Todos</div>
        </div>
        {/* <div className={styles.categoriesCategories}>
          <div className={styles.categoriesCard}>
            <div className={styles.categoriesCardImage}>imagen</div>
            <div className={styles.categoriesCardText}>Perros</div>
          </div>
          <div className={styles.categoriesCard}>
            <div className={styles.categoriesCardImage}>imagen</div>
            <div className={styles.categoriesCardText}>Gatos</div>
          </div>
        </div> */}
        <div className={styles.containerSearchResult}>
          {data && data.length >0 && data.map((el)=>{
           return <CardSeacrhResult key={el._id} data={el}/>
          })}
        </div>
      </div>
    </section>
  )
}else {
  return null
}
}

export default BuscandoMejorAmigo