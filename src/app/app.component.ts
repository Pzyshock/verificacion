import { Component } from '@angular/core';
import { DetalleVerificacionComponent } from './detalle-verificacion/detalle-verificacion.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DetalleVerificacionComponent]

})
export class AppComponent {
  title = 'app works!';
}
