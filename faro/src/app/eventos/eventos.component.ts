import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  ngOnInit(): void {

  }

  mostrarPopup: boolean = false;
  nombreEvento: string = '';
  tipoEvento: string = 'publico'; // Por defecto público
  invitados: string = 'amigos'; // Por defecto amigos
  direccionEvento: string = '';
  eventoCreado: boolean = false;

  mostrarFormulario(): void {
    this.mostrarPopup = true;
  }

  cerrarPopup(): void {
    this.mostrarPopup = false;
  }

  crearEvento(formularioEvento: NgForm): void {
    if (formularioEvento.valid) {
      const valoresFormulario = formularioEvento.value;
      // Aquí puedes acceder a los valores del formulario y realizar las operaciones necesarias
      console.log(valoresFormulario);
      // Simulación de creación de evento
      this.eventoCreado = true;
    }
  }
}
