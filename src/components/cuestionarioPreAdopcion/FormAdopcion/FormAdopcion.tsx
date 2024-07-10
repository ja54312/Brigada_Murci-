//styles
import styles from './FormAdopcion.module.sass'

export const FormAdopcion = () => {
    return (
        <section className={styles.FormAdopcion}>
            <form className={styles.form}>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Correo</label>
                    <input
                        type='email'
                        placeholder='Tu dirección de correo'
                        className={styles.input}
                    />
                </div>
            </form>
        </section>
    )
}
