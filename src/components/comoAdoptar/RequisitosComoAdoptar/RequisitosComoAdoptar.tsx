//styles
import styles from './RequisitosComoAdoptar.module.sass'

export const RequisitosComoAdoptar = () => {
    return (
        <section className={styles.RequisitosComoAdoptar}>
            <div className={styles.ContainerConsidera}>
                <div className={styles.ContainerTitle}>
                    <span>Considera que:</span>
                </div>
                <div className={styles.ContainerText}>
                    <p>Un perro o un gato es un compromiso de 10 a 15 años, requerirá atención médica adecuada, cuidados y un espacio acorde a su personalidad.</p>
                </div>
            </div>
            <div className={styles.ContainerRequisitos}>
                <div className={styles.ContainerTitle}>
                    <span>Requisitos para adopción:</span>
                </div>
                <ul className={styles.ContainerList}>
                    <li>Ser mayor de 21 años y con solvencia económica.</li>
                    <li>El jefe de familia y/o dueño de la casa deberá estar de acuerdo con la adopción.</li>
                    <li>Llena el formulario de pre adopción y firma el convenio.</li>
                    <li>Entrega una identificación oficial y un comprobante de domicilio.</li>
                    <li>Contribuye con un donativo económico o en especie.</li>
                    <li>Tener lista su plaquita de identificación.</li>
                </ul>
            </div>
        </section>
    )
}
