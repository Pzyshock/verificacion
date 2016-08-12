import { RCivil, Municipio, Parroquia } from './clases'

export const MUNICIPIOS: Municipio[] = [
    {id:1, nombre:'Anaco'},
    {id:2, nombre:'Aragua'},
    {id:3, nombre:'Bolivar'}
]

export const PARROQUIAS: Parroquia[] = [
    {id:1, id_municipio:1, nombre:'Anaco'},
    {id:2, id_municipio:1, nombre:'San Joaquin'},
    {id:3, id_municipio:2, nombre:'Aragua de Barcelona'},
    {id:4, id_municipio:3, nombre:'San Cristobal'}
]
