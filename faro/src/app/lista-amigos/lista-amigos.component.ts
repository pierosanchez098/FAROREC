import { Component, OnInit } from '@angular/core';

interface Amigo {
  id: number;
  nombre: string;
  img: string;
}

@Component({
  selector: 'app-lista-amigos',
  templateUrl: './lista-amigos.component.html',
  styleUrls: ['./lista-amigos.component.css']
})
export class ListaAmigosComponent implements OnInit {

  amigos: Amigo[] = [
    { id: 1, nombre: 'Juan Pérez', img: 'assets/Faro-logo.png' },
    { id: 2, nombre: 'María García', img: 'assets/Faro-logo.png' },
    { id: 3, nombre: 'Carlos Sánchez', img: 'assets/Faro-logo.png' },
    { id: 4, nombre: 'Ana Martínez', img: 'assets/Faro-logo.png' },
    { id: 5, nombre: 'Luis Fernández', img: 'assets/Faro-logo.png' },
    { id: 6, nombre: 'Elena Rodríguez', img: 'assets/Faro-logo.png' },
    { id: 7, nombre: 'José López', img: 'assets/Faro-logo.png' },
    { id: 8, nombre: 'Sofía Gómez', img: 'assets/Faro-logo.png' },
    { id: 9, nombre: 'Miguel Ramírez', img: 'assets/Faro-logo.png' },
    { id: 10, nombre: 'Lucía Díaz', img: 'assets/Faro-logo.png' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  eliminarAmigo(id: number): void {
    this.amigos = this.amigos.filter(amigo => amigo.id !== id);
    console.log(`Amigo con id ${id} eliminado`);
  }

  bloquearAmigo(id: number): void {
    this.amigos = this.amigos.filter(amigo => amigo.id !== id);
    console.log(`Amigo con id ${id} bloqueado`);
  }
}

