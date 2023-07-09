"use client"
//Librerias
import React from 'react'
//Components
import CollectionCards from './components/CollectionCards/CollectionCards'
//Styles
import styles from './Collection.module.css'
//Models
import { Adoption } from './../../../tsModels/adoption.model';
interface CollectionProps {
    collection:string,
    data:Array<Adoption>
}

const Collection:React.FC<CollectionProps> = ({collection,data}) => {
  //console.log('data',data)
  return (
    <section className={styles.sectionCollection}>
        <div className={styles.containerCollection}>
            {data && data.map((el) => {
                  return <CollectionCards key={el._id} data={el}/>;
                })}
        </div>
    </section>
  )
}

export default Collection