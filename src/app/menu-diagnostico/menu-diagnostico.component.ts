import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../app.component';
import { InicioComponent } from '../inicio/inicio.component';
import { EstresComponent } from './estres/estres.component';
import { TipoJugadorComponent } from './tipo-jugador/tipo-jugador.component';
import { RendimientoComponent } from './rendimiento/rendimiento.component';
import { AislamientoComponent } from './aislamiento/aislamiento.component';
import { ProcrastinacionComponent } from './procrastinacion/procrastinacion.component';
import { BarraLateralComponent } from '../barra-lateral/barra-lateral.component';

@Component({
  selector: 'app-menu-diagnostico',
  standalone: true,
  imports: [RouterLink, 
    AppComponent, 
    InicioComponent, 
    EstresComponent, 
    TipoJugadorComponent, 
    RendimientoComponent, 
    AislamientoComponent, 
    ProcrastinacionComponent,
    RendimientoComponent,
    BarraLateralComponent
  ],
  templateUrl: './menu-diagnostico.component.html',
  styleUrl: './menu-diagnostico.component.scss'
})
export class MenuDiagnosticoComponent {

}
