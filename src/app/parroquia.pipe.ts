import { Pipe, PipeTransform } from '@angular/core';
import { Municipio, Parroquia } from './clases';

@Pipe({
  name: 'parroquiaPipe'
})
export class ParroquiaPipe implements PipeTransform {

  transform(value: Parroquia, args?: any): any {
    
    if (args == value.id_municipio) {return value.nombre;} else {return null}

   // return value.filter((item)=>item.) ;

  }

}
