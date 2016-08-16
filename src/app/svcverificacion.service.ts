import { Injectable } from '@angular/core';
import { RCivil, Municipio, Parroquia } from './clases';
import { MUNICIPIOS, PARROQUIAS, OURCS } from './datafantasma';

@Injectable()
export class SvcverificacionService {

  getMunicipios() {
   // return Promise.resolve(MUNICIPIOS);
   return MUNICIPIOS;
  }

  getParroquias() {
    return (PARROQUIAS);
  }

 getOURCS() {
    return (OURCS);
  }
  //constructor() { }

}
