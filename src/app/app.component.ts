import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReferenciasMaterialModule } from '../shared/modulos/referencias-material.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    RouterModule,
    ReferenciasMaterialModule
  ]
})
export class AppComponent {
  title = 'Consulta de Festivos en Colombia';
}