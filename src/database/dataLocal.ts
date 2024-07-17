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
];

const jsonData = JSON.stringify(data, null, 2);

export default jsonData;