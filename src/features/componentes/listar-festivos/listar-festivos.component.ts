import { Component } from '@angular/core';
import { FestivosService } from 'src/core/servicios/festivos.service';
import { Festivo } from 'src/shared/entidades/festivo';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, DatatableComponent, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-listar-festivos',
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './listar-festivos.component.html',
  styleUrls: ['./listar-festivos.component.css']
})
export class ListarFestivosComponent {
  anio!: number;
  festivos: Festivo[] = [];

  constructor(private festivosService: FestivosService) {}

  obtenerFestivos() {
    if (!this.anio) return;
    this.festivosService.obtenerFestivosPorAnio(this.anio).subscribe(data => {
      this.festivos = data;
    });
  }
}