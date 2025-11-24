import { Component } from '@angular/core';

@Component({
  templateUrl: './examenes.html'
})
export class ExamenesComponent {
  examenes = [
    { id: 101, tipo: 'Drogas', resultado: 'Negativo' },
    { id: 102, tipo: 'Alcohol', resultado: 'Positivo' }
  ];
}
