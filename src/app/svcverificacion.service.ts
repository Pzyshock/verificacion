import { Injectable } from '@angular/core';
import { RCivil, Municipio, Parroquia } from './clases';
import { MUNICIPIOS, PARROQUIAS } from './datafantasma';

@Injectable()
export class SvcverificacionService {

  getMunicipios() {
    return Promise.resolve(MUNICIPIOS);
  }

  getParroquias() {
    return Promise.resolve(PARROQUIAS);
  }

  //constructor() { }

}
