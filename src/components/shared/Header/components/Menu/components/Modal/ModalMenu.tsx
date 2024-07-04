"use client"
//hooks
import { useState } from 'react';
//components
import Image from 'next/image';
import classNames from 'classnames/bind';
//styles
import styles from './ModalMenu.module.sass'

const urlArrow = '/images/CaretDown.svg'

export const ModalMenu = ({ isOpenModal, closeModal }) => {
    if (!isOpenModal) return null;

    const [visible, setVisible] = useState(false)
    const [visible02, setVisible02] = useState(false)

    const visibleMenu01 = () => {
        setVisible(!visible)
    }

    const visibleMenu02 = () => {
        setVisible02(!visible02)
    }

    const cx = classNames.bind(styles);

    const arrowStyles = cx('containerArrow', {
        'openArrow': visible,
    });

    const arrowStyles02 = cx('containerArrow', {
        'openArrow': visible02,
    });


    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.containerClose}>
                    <span className={styles.close} onClick={closeModal}>&times;</span>
                </div>
                <div className={styles.ContainerSimpleTitle}>
                    <span>Inicio</span>
                </div>
                <div className={styles.ContainerFatherTitle} onClick={visibleMenu01}>
                    <span>Adopción</span>
                    <div className={arrowStyles}>
                        <Image
                            src={urlArrow}
                            alt="flecha de menu"
                            fill
                        />
                    </div>
                </div>
                {visible && <div className={styles.ContainerSubTitle}>
                    <div className={styles.ContainerSonTitle}>
                        <span>Adopta a un amigo</span>
                        <div className={styles.ContainerArrowMenu}>
                            <Image
                                src={urlArrow}
                                alt="flecha de menu"
                                fill
                            />
                        </div>
                    </div>
                    <div className={styles.ContainerSonTitle}>
                        <span>¿Cómo adoptar?</span>
                        <div className={styles.ContainerArrowMenu}>
                            <Image
                                src={urlArrow}
                                alt="flecha de menu"
                                fill
                            />
                        </div>
                    </div>
                    <div className={styles.ContainerSonTitle}>
                        <span>Cuestionario de pre adopción</span>
                        <div className={styles.ContainerArrowMenu}>
                            <Image
                                src={urlArrow}
                                alt="flecha de menu"
                                fill
                            />
                        </div>
                    </div>
                </div>}
                <div className={styles.ContainerFatherTitle} onClick={visibleMenu02}>
                    <span>¿Cómo ayudar?</span>
                    <div className={arrowStyles02}>
                        <Image
                            src={urlArrow}
                            alt="flecha de menu"
                            fill
                        />
                    </div>
                </div>
                {visible02 && <div className={styles.ContainerSubTitle}>
                    <div className={styles.ContainerSonTitle}>
                        <span>Con donaciones</span>
                        <div className={styles.ContainerArrowMenu}>
                            <Image
                                src={urlArrow}
                                alt="flecha de menu"
                                fill
                            />
                        </div>
                    </div>
                    <div className={styles.ContainerSonTitle}>
                        <span>Ser un padrino</span>
                        <div className={styles.ContainerArrowMenu}>
                            <Image
                                src={urlArrow}
                                alt="flecha de menu"
                                fill
                            />
                        </div>
                    </div>
                    <div className={styles.ContainerSonTitle}>
                        <span>Ser un voluntario</span>
                        <div className={styles.ContainerArrowMenu}>
                            <Image
                                src={urlArrow}
                                alt="flecha de menu"
                                fill
                            />
                        </div>
                    </div>
                </div>}
                <div className={styles.ContainerSimpleTitle}>
                    <span>Acerca de Brigada Murci</span>
                </div>
                <div className={styles.ContainerSimpleTitle}>
                    <span>Noticias</span>
                </div>
                <div className={styles.ContainerSimpleTitle}>
                    <span>Contáctanos</span>
                </div>
            </div>
        </div>
    );
};
