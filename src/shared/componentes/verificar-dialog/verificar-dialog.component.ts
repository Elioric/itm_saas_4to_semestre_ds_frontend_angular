import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

export interface DatosVerificacion {
  mensaje: string;
}

@Component({
  selector: 'app-verificar-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './verificar-dialog.component.html'
})
export class VerificarDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public datos: DatosVerificacion,
    public dialogRef: MatDialogRef<VerificarDialogComponent>
  ) {}

  cerrar() {
    this.dialogRef.close();
  }
}
