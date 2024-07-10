"use client"
//hooks
import { useState } from 'react';
//components
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
//styles
import styles from './ModalMenu.module.sass'

const urlArrow = '/images/CaretDown.svg'

export const ModalMenu = ({ isOpenModal, closeModal }) => {


    const [visible, setVisible] = useState(false)
    const [visible02, setVisible02] = useState(false)

    if (!isOpenModal) return null;

    const gotoRoute = () => {
        setVisible(false)
        setVisible02(false)
        closeModal()
    }

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
                    <Link href='/' onClick={gotoRoute}>
                        <span>Inicio</span>
                    </Link>
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
                        <Link href='#'>
                            <span>Adopta a un amigo</span>
                            <div className={styles.ContainerArrowMenu}>
                                <Image
                                    src={urlArrow}
                                    alt="flecha de menu"
                                    fill
                                />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.ContainerSonTitle}>
                        <Link href='/como-adoptar' onClick={gotoRoute}>
                            <span>¿Cómo adoptar?</span>
                            <div className={styles.ContainerArrowMenu}>
                                <Image
                                    src={urlArrow}
                                    alt="flecha de menu"
                                    fill
                                />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.ContainerSonTitle}>
                        <Link href='/cuestionario-pre-adopcion' onClick={gotoRoute}>
                            <span>Cuestionario de pre adopción</span>
                            <div className={styles.ContainerArrowMenu}>
                                <Image
                                    src={urlArrow}
                                    alt="flecha de menu"
                                    fill
                                />
                            </div>
                        </Link>
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
                        <Link href='/como-ayudar' onClick={gotoRoute}>
                            <span>Con donaciones</span>
                            <div className={styles.ContainerArrowMenu}>
                                <Image
                                    src={urlArrow}
                                    alt="flecha de menu"
                                    fill
                                />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.ContainerSonTitle}>
                        <Link href='#'>
                            <span>Ser un padrino</span>
                            <div className={styles.ContainerArrowMenu}>
                                <Image
                                    src={urlArrow}
                                    alt="flecha de menu"
                                    fill
                                />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.ContainerSonTitle}>
                        <Link href='#'>
                            <span>Ser un voluntario</span>
                            <div className={styles.ContainerArrowMenu}>
                                <Image
                                    src={urlArrow}
                                    alt="flecha de menu"
                                    fill
                                />
                            </div>
                        </Link>
                    </div>
                </div>}
                <div className={styles.ContainerSimpleTitle}>
                    <Link href='#'>
                        <span>Acerca de Brigada Murci</span>
                    </Link>
                </div>
                <div className={styles.ContainerSimpleTitle}>
                    <Link href='#'>
                        <span>Noticias</span>
                    </Link>
                </div>
                <div className={styles.ContainerSimpleTitle}>
                    <Link href='#'>
                        <span>Contáctanos</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
