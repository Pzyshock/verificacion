import { Pipe, PipeTransform } from '@angular/core';
import { Municipio, Parroquia } from './clases';

@Pipe({
  name: 'parroquiaPipe'
})
export class ParroquiaPipe implements PipeTransform {

  transform(value: Parroquia[], args?: any): any {
    return value.filter((item)=>{item.id_municipio=args)} ;
   // return value.filter((item)=>item.) ;
  }

}
