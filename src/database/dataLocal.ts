interface DataObject {
    id: string;
    index: number
    name: string;
    genre: string;
    age: number;
    weight: number;
    size: string;
    energy: number;
    conviveBaby: boolean;
    conviveDog: boolean;
    conviveCat: boolean;
    desc: string;
    urlimg: string;
}

const data: DataObject[] = [
    {
        id: "Kika",
        index: 1,
        name: "Kika",
        genre: "Female",
        age: 1.5,
        weight: 9,
        size: "chica",
        energy: 3,
        conviveBaby: true,
        conviveDog: true,
        conviveCat: false,
        desc: "Fui rescatada junto con mis hermanitas cuando mis dueños decidieron abandonarnos por ser hembras. Soy muy enérgica, disfruto correr por las tardes. Si tienes otro perrito en casa, seré la compañera de juego ideal para él.  Soy muy sociable y me llevo bien con personas de todas las edades. Si me adoptas, prometo llenar tu vida de alegría, risas y momentos inolvidables.",
        urlimg: "https://example.com/image1.jpg"
    },
    {
        id: "Bella",
        index: 2,
        name: "Bella",
        genre: "Female",
        age: 3,
        weight: 15,
        size: "grande",
        energy: 1,
        conviveBaby: true,
        conviveDog: true,
        conviveCat: true,
        desc: "Paseaba por las calles con un peso muy bajo, mis huesitos se marcaban por lo delgada que estaba. Fui rescatada la Brigada Murci, me proporcionó alimento y un lugar cálido para descansar. Estoy muy agradecida y soy una perrita muy tranquila y dócil. Si llevas un estilo de vida relajado, soy la compañera ideal para ti.",
        urlimg: "https://example.com/image1.jpg"
    },
    {
        id: "Bella",
        index: 3,
        name: "Bella",
        genre: "Female",
        age: 4,
        weight: 20,
        size: "grande",
        energy: 4,
        conviveBaby: true,
        conviveDog: false,
        conviveCat: false,
        desc: "Mi historia ha conmovido a miles y gracias a los sabios médicos, me he recuperado de mis múltiples lesiones. Soy una perrita amorosa y extremadamente cariñosa con los niños y las personas. No obstante, mi magia no se comparte con otras hembras o cachorros, por lo que mi hogar ideal sería sin otros perros o con un macho dominante.",
        urlimg: "https://example.com/image1.jpg"
    },
    {
        id: "Tasha",
        index: 4,
        name: "Tasha",
        genre: "Female",
        age: 4,
        weight: 18,
        size: "grande",
        energy: 4,
        conviveBaby: true,
        conviveDog: false,
        conviveCat: false,
        desc: "Soy Tasha, una perrita pitbull de 3 años, tamaño mediano y una luchadora. Sobreviví a TVT y parvovirus, ¡así que no hay obstáculo que me detenga! Me encanta estar cerca de humanos, aunque prefiero ser la única mascota de la casa, ya que tengo un carácter fuerte.",
        urlimg: "https://example.com/image1.jpg"
    },
    {
        id: "Guapa",
        index: 5,
        name: "Guapa",
        genre: "Female",
        age: 3,
        weight: 18,
        size: "grande",
        energy: 3,
        conviveBaby: true,
        conviveDog: true,
        conviveCat: false,
        desc: "Soy una perrita encantadora que solía ser la fiel compañera de una persona sin hogar. Un día, Brigada Murci me llevó para esterilizarme  y luego volver con mi dueño, pero al ver que no era muy amigable conmigo, decidieron llevarme con ellos y buscarme un nuevo hogar. Aunque soy algo tímida, me encanta jugar con otros perros. ¿Quieres ser mi héroe y darme un hogar lleno de amor? ¡Adóptame!",
        urlimg: "https://example.com/image1.jpg"
    },
    {
        id: "Tokio",
        index: 6,
        name: "Tokio",
        genre: "Female",
        age: 1.5,
        weight: 15,
        size: "mediana",
        energy: 3,
        conviveBaby: true,
        conviveDog: true,
        conviveCat: true,
        desc: "Soy una princesa de la montaña. Hace un año me encontraron y sin dudarlo me llevaron a casa. Convivo con todo tipo de perritos y lo que más deseo es tener unos hermanos perrunos para jugar. Me encanta correr por el jardín, jugar con pelotas y recibir caricias. Soy una perrita muy cariñosa y leal, y prometo llenar tu vida de amor y compañía.",
        urlimg: "https://example.com/image1.jpg"
    },
    {
        id: "Kimichi",
        index: 7,
        name: "Kimichi",
        genre: "Female",
        age: 1.5,
        weight: 21,
        size: "grande",
        energy: 4,
        conviveBaby: true,
        conviveDog: true,
        conviveCat: false,
        desc: "Crecí sin mi mami perruna y mi comportamiento con otros perritos era un poco hostil y fui enviada a un campamento de socialización, ahora camino perfectamente con correa y convivo con otros perritos de todas las edades y tamaños. Soy una compañera de viaje perfecta, busco a una persona aventurera y activa para unirme a su vida.",
        urlimg: "https://example.com/image1.jpg"
    },
    {
        id: "Cuca",
        index: 8,
        name: "Cuca",
        genre: "Female",
        age: 4,
        weight: 22,
        size: "mediana",
        energy: 4,
        conviveBaby: true,
        conviveDog: true,
        conviveCat: false,
        desc: "Soy la cuarta rescatada de la Brigada Murci. Llevo casi 4 años esperando un hogar y aún no he recibido ni una solicitud de amistad. Me llevo bien con perros, preferiblemente más jóvenes, pero no me llevo nada bien con los gatos. Disfruto correr todos los días. Si puedes adoptarme junto a mi hermano Berni, seremos muy felices, ya que en los últimos 3 años no nos hemos separado y él se entristece mucho sin mí. ¡Adóptanos!",
        urlimg: "https://example.com/image1.jpg"
    },
    {
        id: "Lottie",
        index: 9,
        name: "Lottie",
        genre: "Female",
        age: 2,
        weight: 18,
        size: "mediana",
        energy: 4,
        conviveBaby: true,
        conviveDog: true,
        conviveCat: false,
        desc: "Fui rescatada con mis hermanitos, pero a pesar de haber sido adoptada dos veces, no he tenido suerte. A pesar de que se siguieron los protocolos, mis adoptantes me maltrataron y me ataron, pero mi mami Murci vino en mi ayuda de inmediato. Aunque ella me brinda todo su amor, busco un hogar permanente que me dé todo lo que merezco. ¡Adóptame!",
        urlimg: "https://example.com/image1.jpg"
    },
    {
        id: "Berni",
        index: 10,
        name: "Berni",
        genre: "Male",
        age: 6,
        weight: 23,
        size: "grande",
        energy: 4,
        conviveBaby: true,
        conviveDog: true,
        conviveCat: false,
        desc: "Soy el más fuerte de la manada Murci y el tercer rescatado, así que llevo tres años esperando un hogar donde me consientan. ¡Ni una sola solicitud de adopción! Me llevo bien con otros perros, pero prefiero las hembras. Si puedes adoptarme junto a mi hermana Cuquita, seremos muy felices, ya que en los últimos 3 años no nos hemos separado y yo me me deprimo mucho sin ella. ¡Adóptanos!",
        urlimg: "https://example.com/image1.jpg"
    },
    {
        id: "Zuzi",
        index: 11,
        name: "Zuzi",
        genre: "Female",
        age: 3,
        weight: 18,
        size: "mediana",
        energy: 3,
        conviveBaby: true,
        conviveDog: true,
        conviveCat: false,
        desc: "Me encontraron cuando estaba en una etapa avanzada de embarazo y con heridas en las patas traseras. Mis cachorros ahora tienen un hogar lleno de amor, pero aún no he encontrado a mi compañero ideal. El médico le dijo a mis rescatistas que las lesiones en mis patitas sanaron con el tiempo a pesar de eso, disfruto mucho pasear. Puedo ser un poco tímida al principio, pero con paciencia, podrás ganarte mi cariño.",
        urlimg: "https://example.com/image1.jpg"
    },
];

const jsonData = JSON.stringify(data, null, 2);

export default jsonData;