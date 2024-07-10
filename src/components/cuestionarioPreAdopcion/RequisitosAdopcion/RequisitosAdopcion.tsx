//styles
import styles from './RequisitosAdopcion.module.sass'

export const RequisitosAdopcion = () => {
    return (
        <section className={styles.RequisitosAdopcion}>
            <div className={styles.containerTitle}>
                <span>Requisitos para adopción:</span>
            </div>
            <div className={styles.containerList}>
                <ul>
                    <li>Ser mayor de 21 años con solvencia económica</li>
                    <li>Cuidar del animalito y mantenerlo en condiciones óptimas de espacio, tiempo, alimentación y ejercicio.</li>
                    <li>Que sea un lugar cerrado y seguro para el perrito, debe ser casa propia con jardín amplio o departamento con espacio suficiente.</li>
                </ul>
            </div>
            <div className={styles.containerHr}>
                <hr />
            </div>
        </section>
    )
}
