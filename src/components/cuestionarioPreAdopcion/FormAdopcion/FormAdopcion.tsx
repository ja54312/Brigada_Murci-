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
                <div className={styles.containerInput}>
                    <label className={styles.label}>Nombre del adoptante</label>
                    <input
                        type='text'
                        placeholder='Escribe tu nombre completo'
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Edad</label>
                    <input
                        type='text'
                        placeholder='Escribe tu edad'
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerText}>
                    <p>En caso de ser menor de 21, el cuestionario deberá ser llenado por el tutor</p>
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Dirección</label>
                    <input
                        type='text'
                        placeholder='Escribe tu dirección completa'
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Teléfono móvil</label>
                    <input
                        type='phone'
                        placeholder='Escribe tu número de teléfono'
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Teléfono móvil de un familiar o amigo</label>
                    <input
                        type='phone'
                        placeholder='Escribe el número de teléfono'
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Nombre de la mascota que deseas adoptar</label>
                    <input
                        type='text'
                        placeholder='Escribe su nombre'
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Nombre de la mascota que deseas adoptar</label>
                    <input
                        type='text'
                        placeholder='Escribe su nombre'
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Nombre de la mascota que deseas adoptar</label>
                    <input
                        type='text'
                        placeholder='Escribe su nombre'
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>¿Dónde te enteraste de la adopción?*</label>
                    <input
                        type='text'
                        placeholder='Escribe tu respuesta'
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Cuéntanos, ¿por qué estas interesado en adoptar?*</label>
                    <input
                        type='text'
                        placeholder='Escribe tu respuesta'
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Dinámica familiar, ¿todos están de acuerdo en adoptar?*</label>
                    <input
                        type='text'
                        placeholder='Escribe tu respuesta'
                        className={styles.input}
                    />
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Indica los cuidados que crees son necesarios para/con el nuevo integrante de tu familia para garantizar su bienestar físico, emocional y de salud:</label>
                    <input
                        type='text'
                        placeholder='Escribe tu respuesta'
                        className={styles.inputArea}
                    />
                </div>
                <div className={styles.containerInputRadio}>
                    <span>¿Tu vivienda es propia o rentada?*</span>
                    <div className={styles.containerOption}>
                        <input
                            type='radio'
                            className={styles.inputRadio}
                        />
                        <label className={styles.labelRadio}>Propia</label>
                    </div>
                    <div className={styles.containerOption}>
                        <input
                            type='radio'
                            className={styles.inputRadio}
                        />
                        <label className={styles.labelRadio}>Rentada</label>
                    </div>
                    <div className={styles.containerOption}>
                        <input
                            type='radio'
                            className={styles.inputRadio}
                        />
                        <label className={styles.labelRadio}>Prestada</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
