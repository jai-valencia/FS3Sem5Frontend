import { Component } from '@angular/core';

@Component({
  templateUrl: './laboratorio.html'
})
export class LaboratorioComponent {
  labs = [
    { id: 1, nombre: 'Lab Central', estado: 'Operativo' },
    { id: 2, nombre: 'Lab Norte', estado: 'Mantenimiento' }
  ];
}
