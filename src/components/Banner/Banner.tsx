"use client"
//Librerias
import React,{useState,useEffect} from 'react'
//Componentes
import CardBanner from './components/CardBanner'
//Styles
import styles from './Banner.module.css'
//Models
import { DEVICE } from '../../../tsModels/useDevice.model'
interface BannerProps {
    device:DEVICE | undefined
}

const Banner:React.FC<BannerProps> = ({device}) => {
    const [leftCarrusel, setLeftCarrusel] = useState(0)
    const [width, setWidth] = useState(0)
    const [position,setPosition] = useState(0)

    const dataBanner = [
        {
            textCard:'¿Estás buscando a tu nuevo mejor amigo?'
        },
        {
            textCard:'Todos los animalitos que encontrarás en este sitio fueron rescatados de la calle en alguna condición extrema de maltrato y / o abandono.'
        },
        {
            textCard:'Deberás estar 100% comprometido con su bienestar al iniciar un proceso de adopción.'
        }
    ]

    useEffect(() => {
        let item: number = window.innerWidth;
        setWidth(item);
      }, []);

    useEffect(() => {
        window.addEventListener(
          "resize",
          function () {
            let item: number = window.innerWidth;
            setWidth(item);
          },
          true
        );
      }, [width]);

      useEffect(() => {
        setLeftCarrusel(width* -position)
      }, [position,width]);

      let colorPoint0:string = position === 0 ? '#7A6BBC' : '#DDDDDD'
      let colorPoint1:string = position === 1 ? '#7A6BBC' : '#DDDDDD'
      let colorPoint2:string = position === 2 ? '#7A6BBC' : '#DDDDDD'

      const selectPoint = (point:number) => {
        setPosition(point)
      }

      //Render Componente deacuerdo dispositivo
    if(device === 'desktop'){
        return null
    }
    if(device === 'tablet'){
        return null
    }
    if(device === 'phone'){
        return (
          <section className={styles.sectionBannerMobile}>
            <div className={styles.containerBannerMobile}>
                <div className={styles.containerCardsGeneralMobile}
                      style={{
                        left: `${leftCarrusel}px`,
                      }}>
                        {
                            dataBanner && dataBanner.map((element,key)=>{
                                return(
                                    <div  key={key} className={styles.itemCard} style={{ width: `${width}px` }}>
                                        <CardBanner data={element}/>
                                    </div>
                                )
                            })
                        }
                </div>
                <div className={styles.containerPuntosMobile}>
                    <div id='0-punto' className={styles.puntoMobile} onClick={()=>selectPoint(0)} style={{backgroundColor:colorPoint0}}></div>
                    <div id='1-punto' className={styles.puntoMobile} onClick={()=>selectPoint(1)} style={{backgroundColor:colorPoint1}}></div>
                    <div id='2-punto' className={styles.puntoMobile} onClick={()=>selectPoint(2)} style={{backgroundColor:colorPoint2}}></div>
                </div>
            </div>
          </section>
        )
    }else{
        return null
    }
}

export default Banner