//styles
import styles from './ModalMenu.module.sass'

export const ModalMenu = ({ isOpenModal, closeModal }) => {
    if (!isOpenModal) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <p>Some modal content</p>
            </div>
        </div>
    );
};
