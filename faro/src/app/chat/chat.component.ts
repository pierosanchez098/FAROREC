import { Component, OnInit } from '@angular/core';

interface Amigo {
  id: number;
  nombre: string;
  img: string;
}

interface Mensaje {
  contenido: string;
  autor: string; // Puede ser 'yo' o 'amigo'
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  amigos: Amigo[] = [
    { id: 1, nombre: 'Sara', img: 'assets/Faro-logo.png' },
    { id: 2, nombre: 'Albert', img: 'assets/Faro-logo.png' },
    { id: 3, nombre: 'Luis', img: 'assets/Faro-logo.png' },
    { id: 4, nombre: 'Adrian', img: 'assets/Faro-logo.png' },
    { id: 5, nombre: 'Mateo', img: 'assets/Faro-logo.png' },
    { id: 6, nombre: 'Franc', img: 'assets/Faro-logo.png' },
    { id: 7, nombre: 'Dana', img: 'assets/Faro-logo.png' },
  ];

  amigoSeleccionado: Amigo | null = null;
  mensajes: Mensaje[] = [];
  nuevoMensaje: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarAmigo(amigo: Amigo): void {
    this.amigoSeleccionado = amigo;
    // Mensajes predeterminados
    this.mensajes = [
      { contenido: 'Hola, ¿cómo estás?', autor: 'amigo' },
      { contenido: '¡Hola! Bien, gracias. ¿Y tú?', autor: 'yo' },
      { contenido: 'Yo también estoy bien, gracias por preguntar.', autor: 'amigo' }
    ];
    console.log(`Amigo seleccionado: ${amigo.nombre}`);
  }

  enviarMensaje(): void {
    if (this.nuevoMensaje.trim() !== '') {
      this.mensajes.push({ contenido: this.nuevoMensaje, autor: 'yo' });
      this.nuevoMensaje = '';
      // Respuesta automática del amigo
      setTimeout(() => {
        this.mensajes.push({ contenido: '*Respuesta del amigo*', autor: 'amigo' });
      }, 1000); // 1 segundo de retraso para la respuesta automática
    }
  }

  eliminarAmigo(id: number): void {
    this.amigos = this.amigos.filter(amigo => amigo.id !== id);
    console.log(`Amigo con id ${id} eliminado`);
  }

  bloquearAmigo(id: number): void {
    console.log(`Amigo con id ${id} bloqueado`);
  }
}
