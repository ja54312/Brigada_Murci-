"use client"
//components
import Image from 'next/image'
import { ModalMenu } from './components/Modal'
//hooks
import useModal from '../../../../../hooks/useModal'
//styles
import styles from './Menu.module.sass'


export const Menu = () => {

    const { isOpenModal, openModal, closeModal } = useModal();


    return (
        <div className={styles.MenuContainer} onClick={openModal}>
            <div className={styles.MenuBackGround}>
                <Image
                    src="/images/List.svg"
                    alt="MenuHamburguesa"
                    width={28}
                    height={28}
                />
            </div>
            <ModalMenu isOpenModal={isOpenModal} closeModal={closeModal} />
        </div>
    )
}
