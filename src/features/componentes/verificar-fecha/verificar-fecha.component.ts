import { Component, Inject } from '@angular/core';
import { FestivosService } from 'src/core/servicios/festivos.service';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { VerificarDialogComponent } from '../../../shared/componentes/verificar-dialog/verificar-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-verificar-fecha',
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgFor
  ],
  templateUrl: './verificar-fecha.component.html',
  styleUrls: ['./verificar-fecha.component.css']
})

export class VerificarFechaComponent {
  fechaSeleccionada!: Date;

  constructor(
    private festivosService: FestivosService,
    private dialog: MatDialog
  ) {}

  validarFecha() {
    if (!this.fechaSeleccionada) return;
    const anio = this.fechaSeleccionada.getFullYear();
    const mes = this.fechaSeleccionada.getMonth() + 1;
    const dia = this.fechaSeleccionada.getDate();

    this.festivosService.verificarFestivo(anio, mes, dia).subscribe({
      next: (response: string) => {
        this.dialog.open(VerificarDialogComponent, {
          data: { mensaje: response }
        });
      }
    });
  }
}