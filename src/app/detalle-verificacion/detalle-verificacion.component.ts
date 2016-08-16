import { Component, OnInit } from '@angular/core';
import { Municipio, TipoVerificacion, Parroquia, RCivil } from '../clases';
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
  ourcs: RCivil[];
  tiposVerificacion : TipoVerificacion [] = [{id: 1,nombre: 'Hospital'}, {id: 2, nombre: 'Registro Civil'}];
  selectedMunicipioId: number;
  selectedTipo: TipoVerificacion[];
  selectedParroquiaId: number;
  selectedOURCId: number;
  queMun: number;
  enableParroquia = false;
  enableOURC = false;

  algo = 'Algodon!';

  constructor(private servicio: SvcverificacionService) { }

  getMunicipios() {
    // this.servicio.getMunicipios().then(municipios => this.municipios = municipios);
    // lo de arriba funciona con promise
    this.municipios=this.servicio.getMunicipios();
    //this.selectedMunicipio.nombre=this.municipios[1].nombre ;
  }

  getParroquias() {
   // this.servicio.getParroquias().then(parroquias => this.parroquias = parroquias)
    //this.selectedMunicipio.nombre=this.municipios[1].nombre ;
    this.parroquias=this.servicio.getParroquias();
    this.municipios=this.servicio.getMunicipios();
    this.ourcs=this.servicio.getOURCS();
  }

  ngOnInit() {
    this.getMunicipios();
    this.getParroquias();
  }

  onCMunicipio(idMun) {
    
    // en onchange se inyecta arg por que selectedmunicipioid se setea es despues del change, creo que en click
    //this.servicio.getParroquias().then(parroquias => this.parroquias.filter((item) => item.id_municipio) = idMun)
    this.parroquias = this.servicio.getParroquias().filter((item) => item.id_municipio==idMun);
    
    
    //this.selectedMunicipio = newObj;
    this.queMun=idMun;
    this.enableParroquia=true;
    // ... do other stuff here ...
  }

  onCTipo(newObj) {
    console.log(newObj);
    this.selectedTipo = newObj;
    //this.enableParroquia=true;
    // ... do other stuff here ...
  }

  onCParroquia(idPar) {
    console.log(idPar);
    this.selectedParroquiaId = idPar;
    console.log(this.selectedMunicipioId + " " + idPar)
    this.ourcs = this.servicio.getOURCS().filter((item) => item.id_parroquia==idPar);
    this.enableOURC=true;
    this.selectedOURCId=this.ourcs[0].id;
    //this.enableParroquia=true;
    // ... do other stuff here ...
  }

}
