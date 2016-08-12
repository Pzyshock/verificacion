import { Component, OnInit } from '@angular/core';
import { Municipio, TipoVerificacion, Parroquia } from '../clases';
import { SvcverificacionService } from '../svcverificacion.service';
import {ParroquiaPipe } from '../parroquia.pipe';

@Component({
  moduleId: module.id,
  pipes: [ParroquiaPipe],
  selector: 'app-detalle-verificacion',
  templateUrl: 'detalle-verificacion.component.html',
  //styleUrls: ['/app/pure.css']
  providers: [SvcverificacionService]
})

export class DetalleVerificacionComponent implements OnInit {
  municipios: Municipio[];
  parroquias: Parroquia[];
  tiposVerificacion : TipoVerificacion [] = [{id: 1,nombre: 'Hospital'}, {id: 2, nombre: 'Registro Civil'}];
  selectedMunicipio: Municipio;
  selectedTipo: TipoVerificacion[];
  selectedParroquia: Parroquia;
  queMun: number;
  enableParroquia = false;

  algo = 'Algodon!';

  constructor(private servicio: SvcverificacionService) { }

  getMunicipios() {
    this.servicio.getMunicipios().then(municipios => this.municipios = municipios);
    
    //this.selectedMunicipio.nombre=this.municipios[1].nombre ;
  }

  getParroquias() {
    this.servicio.getParroquias().then(parroquias => this.parroquias = parroquias)
    //this.selectedMunicipio.nombre=this.municipios[1].nombre ;
  }

  ngOnInit() {
    this.getMunicipios();
    this.getParroquias();
  }

  onCMunicipio(newObj) {
    console.log(newObj);
    this.selectedMunicipio = newObj;
    this.queMun=this.selectedMunicipio.id;
    this.enableParroquia=true;
    // ... do other stuff here ...
  }

  onCTipo(newObj) {
    console.log(newObj);
    this.selectedTipo = newObj;
    //this.enableParroquia=true;
    // ... do other stuff here ...
  }

  onCParroquia(newObj) {
    console.log(newObj);
    this.selectedParroquia = newObj;
    //this.enableParroquia=true;
    // ... do other stuff here ...
  }

}
