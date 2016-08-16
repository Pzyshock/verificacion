export class RCivil {
    id: number;
    id_parroquia: number;
    nombre: string;
}

export class Solicitante {
    id: number;
    nombre: string;
}

export class Municipio {
    id: number;
    nombre: string;
}

export class Parroquia {
    id: number;
    id_municipio: number;
    nombre: string;
}

export class Fiscal {
    id: number;
    nombre: string;
}

export class TipoVerificacion {
    id: number;
    nombre: string;
}