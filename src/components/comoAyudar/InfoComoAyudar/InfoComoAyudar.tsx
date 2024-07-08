//styles
import styles from './InfoComoAyudar.module.sass'

export const InfoComoAyudar = () => {
    return (
        <section className={styles.InfoComoAyudar}>
            <div className={styles.ContainerFirstPart}>
                <div className={styles.containerTitle}>
                    <span>Titulo</span>
                </div>
                <div className={styles.containerText}>
                    <p>Lorem ipsum dolor sit amet consectetur. Diam consectetur habitant purus tortor tortor. Dignissim erat fermentum sit leo ut. Lectus morbi est nunc mauris ut.</p>
                </div>
            </div>
            <div className={styles.ContainerSecondtPart}>
                <div className={styles.containerTitle}>
                    <span>Titulo</span>
                </div>
                <ul className={styles.containerText}>
                    <li>Lorem ipsum dolor sit amet consectetur. Turpis nibh sed nibh venenatis. Non commodo laoreet enim nisl sagittis pellentesque praesent sed.</li>
                    <li>Urna volutpat diam ut orci. Quam et tortor diam sagittis convallis tempus eget adipiscing. Quis interdum ullamcorper augue cursus consequat eu.</li>
                    <li>Lacus blandit in accumsan pellentesque convallis imperdiet ultrices eros. Sem tincidunt ut congue tempor cursus sed feugiat lectus odio. Sit ligula non mi commodo ultrices congue sed.</li>
                    <li>Scelerisque iaculis magnis ac montes amet sed mattis ultricies. Nibh commodo ultrices aliquam.</li>
                </ul>
            </div>
        </section>
    )
}
