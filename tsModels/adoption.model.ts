
export enum PET {
    PERRO = 'perro',
    GATO = 'gato'
}

export interface Adoption{
    _id : string
    fechaCreacion: string
    collection:string
    namePet:string
    agePet:number
    genderPet:string
    imagenPet:string
    fechaRecoleccion:Date
    sizePet:string
    energyPet:string
    description:string
}
    