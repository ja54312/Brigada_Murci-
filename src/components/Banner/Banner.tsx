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
    const dataBanner = [
        {
            textCard:'1'
        },
        {
            textCard:'2'
        },
        {
            textCard:'3'
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
      //console.log(0,device)
      //console.log('width',width)
      //0 375 750
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
                                    <div  className={styles.itemCard} style={{ width: `${width}px` }}>
                                        <CardBanner key={key} data={element}/>
                                    </div>
                                )
                            })
                        }
                </div>
                <div className={styles.containerPuntosMobile}>bolitas</div>
            </div>
          </section>
        )
    }else{
        return null
    }
}

export default Banner