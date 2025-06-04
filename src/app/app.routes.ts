import { Routes } from '@angular/router';
import { VerificarFechaComponent } from '../features/componentes/verificar-fecha/verificar-fecha.component';
import { ListarFestivosComponent } from '../features/componentes/listar-festivos/listar-festivos.component';
import { InicioComponent } from '../features/componentes/inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'verificar', component: VerificarFechaComponent },
  { path: 'festivos', component: ListarFestivosComponent }
];