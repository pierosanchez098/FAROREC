import { Component, OnInit } from '@angular/core';

interface Notificacion {
  id: number;
  titulo: string;
  detalle: string;
  fecha: string;
  tipo: string
}

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {

  notificaciones: Notificacion[] = [];

  constructor() { }

  ngOnInit(): void {
    // Simulación de notificaciones desde una base de datos
    this.notificaciones = [
      {
        id: 1,
        titulo: 'Nueva solicitud de amistad',
        detalle: 'Juan Pérez te ha enviado una solicitud de amistad.',
        fecha: '2024-06-12',
        tipo: 'solicitud_amistad'
      },
      {
        id: 2,
        titulo: 'Evento próximo',
        detalle: 'Recordatorio: Tienes un evento próximo este fin de semana.',
        fecha: '2024-06-10',
        tipo: 'Evento'
      },
      {
        id: 3,
        titulo: 'Mensaje recibido',
        detalle: 'Has recibido un nuevo mensaje de María Gómez.',
        fecha: '2024-06-08',
        tipo: 'Mensaje'
      }
    ];
  }

  aceptarSolicitudAmistad(notificacionId: number): void {
    console.log('Solicitud de amistad aceptada:', notificacionId);
    this.eliminarNotificacion(notificacionId);
  }

  eliminarNotificacion(notificacionId: number): void {
    // Filtrar la notificación a eliminar
    this.notificaciones = this.notificaciones.filter(notificacion => notificacion.id !== notificacionId);
    console.log('Notificación eliminada:', notificacionId);
  }

}

