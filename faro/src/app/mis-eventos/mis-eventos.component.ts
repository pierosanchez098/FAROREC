import { Component, OnInit } from '@angular/core';

export interface Evento {
  nombre: string;
  fecha: string;
  hora: string;
  direccion: string;
  descripcion: string;
  asistentesConfirmados: number;
  asistenciaCancelada?: boolean; 
}

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent implements OnInit {

  eventosPublicosPorAsistir: any[] = [];
  eventosPrivados: any[] = [];
  eventosCreadosPorMi: any[] = [];
  eventoSeleccionado: any;
  mostrarPopup: boolean = false; 
  mostrarPopupEliminar: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Simulación de datos de eventos
    this.eventosPublicosPorAsistir = [
      { 
        nombre: 'Concierto en el parque', 
        tipo: 'publico', 
        fecha: '2024-06-20', 
        direccion: 'Parque Central', 
        hora: '18:00', 
        descripcion: 'Disfruta de una tarde de música en vivo en el parque central.',
        asistentesConfirmados: 50
      },
      { 
        nombre: 'Charla sobre medio ambiente', 
        tipo: 'publico', 
        fecha: '2024-07-15', 
        direccion: 'Centro Cultural', 
        hora: '15:00', 
        descripcion: 'Aprende sobre la importancia de cuidar nuestro entorno.',
        asistentesConfirmados: 30
      },
    ];

    this.eventosPrivados = [
      { 
        nombre: 'Cena de cumpleaños', 
        tipo: 'privado', 
        fecha: '2024-08-05', 
        direccion: 'Casa de Juan', 
        hora: '19:30', 
        descripcion: 'Celebración íntima para festejar el cumpleaños de Juan.',
        asistentesConfirmados: 20
      },
      { 
        nombre: 'Reunión familiar', 
        tipo: 'privado', 
        fecha: '2024-09-10', 
        direccion: 'Residencia López', 
        hora: '12:00', 
        descripcion: 'Encuentro familiar para compartir y recordar buenos momentos.',
        asistentesConfirmados: 15
      },
    ];

    this.eventosCreadosPorMi = [
      { 
        nombre: 'Fiesta de inauguración', 
        tipo: 'privado', 
        fecha: '2024-07-01', 
        direccion: 'Mi Casa', 
        hora: '20:00', 
        descripcion: 'Celebra la inauguración de mi nuevo hogar con amigos y familiares.',
        asistentesConfirmados: 10
      },
      { 
        nombre: 'Evento de networking', 
        tipo: 'publico', 
        fecha: '2024-07-25', 
        direccion: 'Centro de Convenciones', 
        hora: '10:00', 
        descripcion: 'Encuentro para conocer a profesionales de diversas áreas y establecer contactos.',
        asistentesConfirmados: 40
      },
    ];
  }

  cancelarAsistencia(evento: any): void {   
    this.eventoSeleccionado = evento;
    this.mostrarPopup = true;
  }

  confirmarCancelacionAsistencia(): void {
    let index;
    index = this.eventosPublicosPorAsistir.indexOf(this.eventoSeleccionado);
    if (index !== -1) {
      this.eventosPublicosPorAsistir.splice(index, 1);
    }
  
    index = this.eventosPrivados.indexOf(this.eventoSeleccionado);
    if (index !== -1) {
      this.eventosPrivados.splice(index, 1);
    }
  
    index = this.eventosCreadosPorMi.indexOf(this.eventoSeleccionado);
    if (index !== -1) {
      this.eventosCreadosPorMi.splice(index, 1);
    }
  
    this.mostrarPopup = false; 
  }
  

  cancelarConfirmacion(): void {
    this.mostrarPopup = false; 
    this.mostrarPopupEliminar = false;
  }

  eliminarEvento(evento: any): void {
    this.eventoSeleccionado = evento;
    this.mostrarPopupEliminar = true;
  }
  
  
  confirmarEliminacionEvento(): void {
    const index = this.eventosCreadosPorMi.indexOf(this.eventoSeleccionado);
    if (index !== -1) {
      this.eventosCreadosPorMi.splice(index, 1);
    }
    this.mostrarPopupEliminar = false;
  }
}

