import { Routes } from '@angular/router';
import { RecursosAyudaComponent } from './recursos-ayuda/recursos-ayuda.component';
import { PreguntasComponent } from './recursos-ayuda/preguntas/preguntas.component';
import { NoticiasComponent } from './recursos-ayuda/noticias/noticias.component';
import { ApoyoComponent } from './recursos-ayuda/apoyo/apoyo.component';
import { HerramientasComponent } from './recursos-ayuda/herramientas/herramientas.component';
import { ConsejosComponent } from './recursos-ayuda/consejos/consejos.component';
import { EnlacesComponent } from './recursos-ayuda/enlaces/enlaces.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuDiagnosticoComponent } from './menu-diagnostico/menu-diagnostico.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: '', redirectTo:'inicio', pathMatch: 'full'},
    { path: 'home', component: AppComponent },
    { path: 'recursos-ayuda', component: RecursosAyudaComponent },
    { path: 'preguntas', component: PreguntasComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'apoyo', component: ApoyoComponent },
    { path: 'herramientas', component: HerramientasComponent },
    { path: 'consejos', component: ConsejosComponent },
    { path: 'enlaces', component: EnlacesComponent },
    { path: 'notfound', component: NotfoundComponent },
    { path: 'evaluacion', component: MenuDiagnosticoComponent },
    { path: 'inicio', component: InicioComponent },
];
